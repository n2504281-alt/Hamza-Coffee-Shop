/* ==========================================================================
   HAMZA COFFEE SHOP — Supabase Backend Integration Client
   ========================================================================== */

// Default configuration placeholders (Vercel automatically injects env variables)
const SUPABASE_URL = window.SUPABASE_URL || 'https://your-supabase-project.supabase.co';
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || 'your-supabase-anon-key';

let supabaseClient = null;

// Initialize Supabase Client if SDK is loaded
if (typeof supabase !== 'undefined' && supabase.createClient) {
  try {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('✅ Supabase Client initialized successfully.');
  } catch (err) {
    console.warn('⚠️ Supabase Initialization warning:', err);
  }
} else {
  console.warn('⚠️ Supabase JS SDK not detected on this page.');
}

/**
 * Helper to check if Supabase is active and properly connected
 */
function isSupabaseConfigured() {
  return supabaseClient !== null && SUPABASE_URL.indexOf('your-supabase-project') === -1;
}

/**
 * Save new customer order to Supabase 'orders' table
 */
async function createSupabaseOrder(orderData) {
  if (!isSupabaseConfigured()) {
    console.log('ℹ️ Supabase not configured with live keys. Saved to local storage fallback.');
    return { success: true, isFallback: true, id: 'ORD-' + Math.floor(100000 + Math.random() * 900000) };
  }

  try {
    const { data, error } = await supabaseClient
      .from('orders')
      .insert([
        {
          order_number: orderData.orderNumber || ('ORD-' + Math.floor(100000 + Math.random() * 900000)),
          customer_name: orderData.name,
          customer_email: orderData.email,
          customer_phone: orderData.phone,
          delivery_type: orderData.deliveryType || 'pickup',
          delivery_address: orderData.address || '',
          items: orderData.items,
          total_amount: parseFloat(orderData.total),
          payment_method: orderData.paymentMethod || 'cash',
          status: 'Pending'
        }
      ])
      .select();

    if (error) throw error;
    return { success: true, data: data[0] };
  } catch (err) {
    console.error('❌ Supabase Order Insertion Error:', err.message || err);
    return { success: false, error: err.message };
  }
}

/**
 * Save table reservation to Supabase 'reservations' table
 */
async function createSupabaseReservation(reservationData) {
  if (!isSupabaseConfigured()) {
    console.log('ℹ️ Supabase not active. Local fallback used.');
    return { success: true, isFallback: true };
  }

  try {
    const { data, error } = await supabaseClient
      .from('reservations')
      .insert([
        {
          guest_name: reservationData.name,
          email: reservationData.email,
          phone: reservationData.phone,
          guests_count: parseInt(reservationData.guests, 10) || 2,
          booking_date: reservationData.date,
          booking_time: reservationData.time,
          special_request: reservationData.notes || '',
          status: 'Confirmed'
        }
      ])
      .select();

    if (error) throw error;
    return { success: true, data: data[0] };
  } catch (err) {
    console.error('❌ Supabase Reservation Error:', err.message || err);
    return { success: false, error: err.message };
  }
}

/**
 * Save newsletter subscriber to Supabase 'newsletter_subscribers' table
 */
async function subscribeSupabaseNewsletter(email) {
  if (!isSupabaseConfigured()) {
    return { success: true, isFallback: true };
  }

  try {
    const { data, error } = await supabaseClient
      .from('newsletter_subscribers')
      .insert([{ email: email }]);

    if (error) {
      if (error.code === '23505') {
        return { success: true, alreadySubscribed: true };
      }
      throw error;
    }
    return { success: true, data };
  } catch (err) {
    console.error('❌ Supabase Newsletter Error:', err.message || err);
    return { success: false, error: err.message };
  }
}

/**
 * Save contact query to Supabase 'contact_messages' table
 */
async function sendSupabaseContact(contactData) {
  if (!isSupabaseConfigured()) {
    return { success: true, isFallback: true };
  }

  try {
    const { data, error } = await supabaseClient
      .from('contact_messages')
      .insert([
        {
          name: contactData.name,
          email: contactData.email,
          subject: contactData.subject || '',
          message: contactData.message
        }
      ]);

    if (error) throw error;
    return { success: true, data };
  } catch (err) {
    console.error('❌ Supabase Contact Error:', err.message || err);
    return { success: false, error: err.message };
  }
}

/**
 * Fetch all orders for Admin Dashboard
 */
async function fetchSupabaseOrders() {
  if (!isSupabaseConfigured()) return null;

  try {
    const { data, error } = await supabaseClient
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (err) {
    console.error('❌ Supabase Fetch Orders Error:', err.message || err);
    return null;
  }
}

/**
 * Update order status in Admin Dashboard
 */
async function updateSupabaseOrderStatus(orderId, newStatus) {
  if (!isSupabaseConfigured()) return false;

  try {
    const { error } = await supabaseClient
      .from('orders')
      .update({ status: newStatus })
      .eq('id', orderId);

    if (error) throw error;
    return true;
  } catch (err) {
    console.error('❌ Supabase Update Order Status Error:', err.message || err);
    return false;
  }
}

// Make functions available globally
window.createSupabaseOrder = createSupabaseOrder;
window.createSupabaseReservation = createSupabaseReservation;
window.subscribeSupabaseNewsletter = subscribeSupabaseNewsletter;
window.sendSupabaseContact = sendSupabaseContact;
window.fetchSupabaseOrders = fetchSupabaseOrders;
window.updateSupabaseOrderStatus = updateSupabaseOrderStatus;
