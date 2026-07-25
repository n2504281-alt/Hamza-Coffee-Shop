/* ==========================================================================
   HAMZA COFFEE SHOP — Supabase Backend Integration & Auth Client
   ========================================================================== */

const SUPABASE_URL = window.SUPABASE_URL || 'https://your-supabase-project.supabase.co';
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || 'your-supabase-anon-key';

let supabaseClient = null;

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

function isSupabaseConfigured() {
  return supabaseClient !== null && SUPABASE_URL.indexOf('your-supabase-project') === -1;
}

/* --------------------------------------------------------------------------
   USER AUTHENTICATION (Supabase Auth)
   -------------------------------------------------------------------------- */

/**
 * Sign up a new user with Email, Password and Full Name metadata
 */
async function signUpUser(email, password, fullName, phone = '') {
  if (!isSupabaseConfigured()) {
    // Local storage fallback for demo
    const mockUser = { id: 'usr_' + Date.now(), email, name: fullName, phone };
    localStorage.setItem('hcs_session_user', JSON.stringify(mockUser));
    return { success: true, isFallback: true, user: mockUser };
  }

  try {
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          phone: phone
        }
      }
    });

    if (error) throw error;
    if (data.user) {
      localStorage.setItem('hcs_session_user', JSON.stringify({
        id: data.user.id,
        email: data.user.email,
        name: fullName || data.user.email.split('@')[0],
        phone
      }));
    }
    return { success: true, data };
  } catch (err) {
    console.error('❌ Supabase Sign Up Error:', err.message || err);
    return { success: false, error: err.message };
  }
}

/**
 * Sign in existing user with Email & Password
 */
async function signInUser(email, password) {
  if (!isSupabaseConfigured()) {
    const mockUser = { id: 'usr_demo', email, name: email.split('@')[0] };
    localStorage.setItem('hcs_session_user', JSON.stringify(mockUser));
    return { success: true, isFallback: true, user: mockUser };
  }

  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;
    if (data.user) {
      const name = data.user.user_metadata?.full_name || data.user.email.split('@')[0];
      localStorage.setItem('hcs_session_user', JSON.stringify({
        id: data.user.id,
        email: data.user.email,
        name
      }));
    }
    return { success: true, data };
  } catch (err) {
    console.error('❌ Supabase Sign In Error:', err.message || err);
    return { success: false, error: err.message };
  }
}

/**
 * Sign out current user session
 */
async function signOutUser() {
  localStorage.removeItem('hcs_session_user');
  if (isSupabaseConfigured()) {
    try {
      await supabaseClient.auth.signOut();
    } catch (e) {
      console.warn('Sign out warning:', e);
    }
  }
  window.location.href = 'index.html';
}

/**
 * Get current session user
 */
function getCurrentUser() {
  const local = localStorage.getItem('hcs_session_user');
  if (local) {
    try { return JSON.parse(local); } catch(e){}
  }
  return null;
}

/* --------------------------------------------------------------------------
   DATABASE FUNCTIONS
   -------------------------------------------------------------------------- */

async function createSupabaseOrder(orderData) {
  if (!isSupabaseConfigured()) {
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
    console.error('❌ Supabase Order Error:', err.message || err);
    return { success: false, error: err.message };
  }
}

async function createSupabaseReservation(reservationData) {
  if (!isSupabaseConfigured()) {
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

async function subscribeSupabaseNewsletter(email) {
  if (!isSupabaseConfigured()) return { success: true, isFallback: true };
  try {
    const { data, error } = await supabaseClient
      .from('newsletter_subscribers')
      .insert([{ email }]);
    if (error && error.code === '23505') return { success: true, alreadySubscribed: true };
    if (error) throw error;
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

async function sendSupabaseContact(contactData) {
  if (!isSupabaseConfigured()) return { success: true, isFallback: true };
  try {
    const { data, error } = await supabaseClient
      .from('contact_messages')
      .insert([{
        name: contactData.name,
        email: contactData.email,
        subject: contactData.subject || '',
        message: contactData.message
      }]);
    if (error) throw error;
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

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
    return null;
  }
}

async function fetchUserOrders(email) {
  if (!isSupabaseConfigured()) return null;
  try {
    const { data, error } = await supabaseClient
      .from('orders')
      .select('*')
      .eq('customer_email', email)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  } catch (err) {
    return null;
  }
}

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
    return false;
  }
}

// Auto update Navbar Account Button Text on Load
document.addEventListener('DOMContentLoaded', () => {
  const currentUser = getCurrentUser();
  const navBtns = document.querySelectorAll('.nav-account-btn');
  navBtns.forEach(btn => {
    if (currentUser) {
      btn.href = 'account.html';
      btn.innerHTML = `<i data-lucide="user-check" style="width:16px;"></i> ${currentUser.name || 'Account'}`;
    } else {
      btn.href = 'login.html';
      btn.innerHTML = `<i data-lucide="user" style="width:16px;"></i> Sign In`;
    }
  });
  if (typeof lucide !== 'undefined') lucide.createIcons();
});

// Global exports
window.signUpUser = signUpUser;
window.signInUser = signInUser;
window.signOutUser = signOutUser;
window.getCurrentUser = getCurrentUser;
window.createSupabaseOrder = createSupabaseOrder;
window.createSupabaseReservation = createSupabaseReservation;
window.subscribeSupabaseNewsletter = subscribeSupabaseNewsletter;
window.sendSupabaseContact = sendSupabaseContact;
window.fetchSupabaseOrders = fetchSupabaseOrders;
window.fetchUserOrders = fetchUserOrders;
window.updateSupabaseOrderStatus = updateSupabaseOrderStatus;
