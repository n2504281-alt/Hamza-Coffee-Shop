/* ==========================================================================
   HAMZA COFFEE SHOP — Core Application Logic & State Management
   ========================================================================== */

const AppState = {
  cart: JSON.parse(localStorage.getItem('hcs_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('hcs_wishlist')) || [],
  appliedPromo: JSON.parse(localStorage.getItem('hcs_promo')) || null,
  activeOrder: JSON.parse(localStorage.getItem('hcs_active_order')) || null,

  saveCart() {
    localStorage.setItem('hcs_cart', JSON.stringify(this.cart));
    this.updateCartBadges();
  },

  saveWishlist() {
    localStorage.setItem('hcs_wishlist', JSON.stringify(this.wishlist));
    this.updateWishlistBadges();
  },

  updateCartBadges() {
    const totalCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count-badge').forEach(el => {
      el.textContent = totalCount;
      el.style.display = totalCount > 0 ? 'flex' : 'none';
    });
  },

  updateWishlistBadges() {
    const count = this.wishlist.length;
    document.querySelectorAll('.wishlist-count-badge').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  addToCart(product, customizations = {}) {
    const size = customizations.size || (product.sizes ? product.sizes[0] : 'Standard');
    const milk = customizations.milk || (product.milkOptions ? product.milkOptions[0] : 'None');
    const temp = customizations.temp || 'Hot';
    const extras = customizations.extras || [];
    
    // Calculate extra cost
    const extraTotal = extras.reduce((sum, ex) => sum + ex.price, 0);
    const unitPrice = product.price + extraTotal;
    
    const cartItemId = `${product.id}-${size}-${milk}-${temp}-${extras.map(e=>e.name).join('_')}`;
    
    const existingIndex = this.cart.findIndex(item => item.cartItemId === cartItemId);
    
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += (customizations.quantity || 1);
    } else {
      this.cart.push({
        cartItemId,
        id: product.id,
        name: product.name,
        image: product.image,
        price: unitPrice,
        size,
        milk,
        temp,
        extras,
        quantity: customizations.quantity || 1
      });
    }
    
    this.saveCart();
    showToast(`Added "${product.name}" to cart!`);
    
    // If cart drawer is open, re-render drawer
    if (typeof renderCartDrawer === 'function') {
      renderCartDrawer();
    }
  },

  removeFromCart(cartItemId) {
    this.cart = this.cart.filter(item => item.cartItemId !== cartItemId);
    this.saveCart();
    showToast("Item removed from cart.", "info");
    if (typeof renderCartDrawer === 'function') {
      renderCartDrawer();
    }
  },

  updateQuantity(cartItemId, newQty) {
    if (newQty <= 0) {
      this.removeFromCart(cartItemId);
      return;
    }
    const item = this.cart.find(i => i.cartItemId === cartItemId);
    if (item) {
      item.quantity = newQty;
      this.saveCart();
      if (typeof renderCartDrawer === 'function') {
        renderCartDrawer();
      }
    }
  },

  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
      showToast("Removed from Wishlist", "info");
    } else {
      this.wishlist.push(productId);
      showToast("Added to Wishlist!");
    }
    this.saveWishlist();
    
    // Update heart icons
    document.querySelectorAll(`[data-wishlist-id="${productId}"]`).forEach(btn => {
      btn.classList.toggle('active', this.wishlist.includes(productId));
    });
  },

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getCartDiscount() {
    const subtotal = this.getCartSubtotal();
    if (!this.appliedPromo) return 0;
    if (this.appliedPromo.code === 'WELCOME10') return subtotal * 0.10;
    if (this.appliedPromo.code === 'COFFEE20') return subtotal * 0.20;
    return 0;
  },

  getCartTax() {
    const subtotal = this.getCartSubtotal();
    const discount = this.getCartDiscount();
    return (subtotal - discount) * 0.08; // 8% tax
  },

  getCartTotal() {
    const subtotal = this.getCartSubtotal();
    const discount = this.getCartDiscount();
    const tax = this.getCartTax();
    return Math.max(0, subtotal - discount + tax);
  }
};

/* --------------------------------------------------------------------------
   DYNAMIC OPEN / CLOSED TIME LOGIC
   -------------------------------------------------------------------------- */
function checkCaféOpenStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const currentHour = now.getHours();
  const currentMin = now.getMinutes();
  const currentTimeVal = currentHour + (currentMin / 60);

  let isOpen = false;
  let opensAt = "7:00 AM";
  let closesAt = "11:00 PM";

  if (day === 0) { // Sunday
    isOpen = currentTimeVal >= 8.0 && currentTimeVal < 22.0;
    opensAt = "8:00 AM";
    closesAt = "10:00 PM";
  } else { // Mon - Sat (1 to 6)
    isOpen = currentTimeVal >= 7.0 && currentTimeVal < 23.0;
    opensAt = "7:00 AM";
    closesAt = "11:00 PM";
  }

  return {
    isOpen,
    statusText: isOpen ? "Open Now" : "Closed Now",
    subText: isOpen ? `Closing at ${closesAt}` : `Opens at ${opensAt}`
  };
}

function renderOpenStatusWidgets() {
  const statusInfo = checkCaféOpenStatus();
  document.querySelectorAll('.open-status-widget').forEach(widget => {
    widget.className = `open-status-widget status-pill ${statusInfo.isOpen ? 'open' : 'closed'}`;
    widget.innerHTML = `
      <span class="status-dot"></span>
      <span>${statusInfo.statusText}</span>
      <span style="opacity:0.75; font-size:0.75rem; margin-left:4px;">(${statusInfo.subText})</span>
    `;
  });
}

/* --------------------------------------------------------------------------
   TOAST NOTIFICATION SYSTEM
   -------------------------------------------------------------------------- */
function showToast(message, type = "success") {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="lucide-${type === 'success' ? 'check-circle' : 'info'}" style="color:var(--color-caramel);"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* --------------------------------------------------------------------------
   SCROLL REVEAL OBSERVER
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  AppState.updateCartBadges();
  AppState.updateWishlistBadges();
  renderOpenStatusWidgets();
  initScrollReveal();
});
