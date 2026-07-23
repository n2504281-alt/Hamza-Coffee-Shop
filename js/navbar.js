/* ==========================================================================
   HAMZA COFFEE SHOP — Navbar & Drawer UI Mechanics
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const openCartBtns = document.querySelectorAll('.open-cart-btn');

  // Sticky Navbar Transformation on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Mobile Hamburger Menu Toggle
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu?.classList.toggle('open');
  });

  // Cart Drawer Toggles
  openCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  closeCartBtn?.addEventListener('click', closeCartDrawer);
  cartOverlay?.addEventListener('click', closeCartDrawer);

  function openCartDrawer() {
    renderCartDrawer();
    cartDrawer?.classList.add('open');
    cartOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    cartDrawer?.classList.remove('open');
    cartOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Active link detection
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});

// Render Side Cart Drawer Contents Dynamically
function renderCartDrawer() {
  const container = document.getElementById('cartDrawerItems');
  const totalEl = document.getElementById('cartDrawerTotal');
  if (!container) return;

  if (AppState.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem; color:var(--color-text-dim);">
        <i class="lucide-shopping-bag" style="font-size:3rem; opacity:0.3; margin-bottom:1rem;"></i>
        <p>Your cart is empty right now.</p>
        <a href="menu.html" class="btn btn-primary btn-sm" style="margin-top:1.25rem;">Browse Menu</a>
      </div>
    `;
    if (totalEl) totalEl.textContent = "$0.00";
    return;
  }

  container.innerHTML = AppState.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-meta">${item.size} • ${item.temp} • ${item.milk}</div>
        <div style="font-weight:700; color:var(--color-caramel); font-size:0.95rem;">$${item.price.toFixed(2)}</div>
        <div class="qty-control" style="margin-top:0.4rem;">
          <button class="qty-btn" onclick="AppState.updateQuantity('${item.cartItemId}', ${item.quantity - 1})">-</button>
          <span style="font-size:0.85rem; font-weight:600; min-width:18px; text-align:center;">${item.quantity}</span>
          <button class="qty-btn" onclick="AppState.updateQuantity('${item.cartItemId}', ${item.quantity + 1})">+</button>
        </div>
      </div>
      <button onclick="AppState.removeFromCart('${item.cartItemId}')" style="position:absolute; top:8px; right:8px; color:var(--color-text-dim); padding:4px;">
        <i class="lucide-x" style="font-size:0.9rem;"></i>
      </button>
    </div>
  `).join('');

  if (totalEl) {
    totalEl.textContent = `$${AppState.getCartTotal().toFixed(2)}`;
  }
}
