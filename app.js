// --- CATEGORY & PRODUCT GRID LOGIC ---
const categories = [
  { key: "all", label: "All" },
  { key: "electronics", label: "Electronics" },
  { key: "clothing", label: "Clothing" },
  { key: "accessories", label: "Accessories" },
  { key: "kitchen set", label: "Kitchen Set" },
  { key: "furnitures", label: "Furnitures" },
  { key: "books", label: "Books" },
  { key: "beauty creams", label: "Beauty Creams" },
];

const categoryImages = {
  all: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?auto=format&fit=facearea&w=64&h=64', // shopping cart
  electronics: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=facearea&w=64&h=64', // electronics
  clothing: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=64&h=64', // clothing
  accessories: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=64&h=64', // accessories
  'kitchen set': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=64&h=64', // kitchen set
  furnitures: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=facearea&w=64&h=64', // furnitures
  books: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=facearea&w=64&h=64', // books
  'beauty creams': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=64&h=64', // beauty creams
};

function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);
}

// --- HOMEPAGE LOGIC ---
if (document.getElementById('category-list')) {
  // Render categories in top navbar with realistic images
  const categoryList = document.getElementById('category-list');
  categories.forEach(cat => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    if (cat.key === 'all') {
      btn.innerHTML = `${cat.label}`;
    } else {
      const iconUrl = categoryImages[cat.key] || categoryImages['all'];
      btn.innerHTML = `<img class='cat-img' src='${iconUrl}' alt='${cat.label}'>${cat.label}`;
    }
    btn.dataset.category = cat.key;
    btn.className = cat.key === 'all' ? 'active' : '';
    btn.onclick = () => {
      document.querySelectorAll('#category-list button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(cat.key, getFilters());
      renderClothingSectionFilter(cat.key);
      const section = document.querySelector('.products-section');
      const y = section.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
    li.appendChild(btn);
    categoryList.appendChild(li);
  });

  // Clothing section filter
  const clothingSections = [
    { key: 'mens', label: "Men's" },
    { key: 'womens', label: "Women's" },
    { key: 'kids', label: "Kids" }
  ];
  let currentClothingSection = 'mens';
  function renderClothingSectionFilter(category) {
    let filterBar = document.getElementById('clothing-section-filter');
    if (category === 'clothing') {
      if (!filterBar) {
        filterBar = document.createElement('div');
        filterBar.id = 'clothing-section-filter';
        filterBar.style.display = 'flex';
        filterBar.style.justifyContent = 'center';
        filterBar.style.gap = '1.5rem';
        filterBar.style.margin = '1.2rem 0 2rem 0';
        filterBar.style.fontWeight = 'bold';
        filterBar.style.fontSize = '1.1rem';
        document.querySelector('.products-section').prepend(filterBar);
      }
      filterBar.innerHTML = '';
      clothingSections.forEach(sec => {
        const btn = document.createElement('button');
        btn.textContent = sec.label;
        btn.className = 'clothing-section-btn' + (currentClothingSection === sec.key ? ' active' : '');
        btn.style.padding = '0.5em 1.5em';
        btn.style.borderRadius = '8px';
        btn.style.border = 'none';
        btn.style.background = currentClothingSection === sec.key ? 'linear-gradient(90deg, #2a7ae4 60%, #6dd5ed 100%)' : '#f7f8fa';
        btn.style.color = currentClothingSection === sec.key ? '#fff' : '#2a7ae4';
        btn.style.cursor = 'pointer';
        btn.style.transition = 'background 0.2s, color 0.2s';
        btn.onclick = () => {
          currentClothingSection = sec.key;
          renderClothingSectionFilter('clothing');
          renderProducts('clothing', getFilters());
        };
        filterBar.appendChild(btn);
      });
      filterBar.style.display = 'flex';
    } else if (filterBar) {
      filterBar.style.display = 'none';
    }
  }

  // Populate brand dropdown
  const brandSelect = document.getElementById('brand-select');
  const brands = Array.from(new Set(products.map(p => p.brand)));
  brands.forEach(brand => {
    const opt = document.createElement('option');
    opt.value = brand;
    opt.textContent = brand;
    brandSelect.appendChild(opt);
  });

  // Filter controls
  const priceRange = document.getElementById('price-range');
  const priceValue = document.getElementById('price-value');
  priceRange.max = Math.max(...products.map(p => p.price));
  priceRange.value = priceRange.max;
  priceValue.textContent = `$0 - $${priceRange.value}`;
  priceRange.oninput = () => {
    priceValue.textContent = `$0 - $${priceRange.value}`;
    renderProducts(getActiveCategory(), getFilters());
  };
  brandSelect.onchange = () => renderProducts(getActiveCategory(), getFilters());
  document.getElementById('rating-select').onchange = () => renderProducts(getActiveCategory(), getFilters());

  function getActiveCategory() {
    return document.querySelector('#category-list button.active').dataset.category;
  }
  function getFilters() {
    return {
      price: [0, parseInt(priceRange.value)],
      brand: brandSelect.value,
      rating: document.getElementById('rating-select').value
    };
  }

  // Render products
  function renderProducts(category, filters) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    let filtered = products.filter(p => p.price >= filters.price[0] && p.price <= filters.price[1]);
    if (category !== 'all') filtered = filtered.filter(p => p.category === category);
    if (category === 'clothing') {
      filtered = filtered.filter(p => p.section === currentClothingSection);
    }
    if (filters.brand !== 'all') filtered = filtered.filter(p => p.brand === filters.brand);
    if (filters.rating !== 'all') filtered = filtered.filter(p => p.rating >= parseFloat(filters.rating));
    if (filtered.length === 0) {
      grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">No products found.</p>';
      return;
    }
    filtered.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.style.minWidth = '240px';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-name">${product.name}</div>
        <div class="product-brand">${product.brand}</div>
        <div class="product-rating">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? '½' : ''} <span style="color:#888;font-size:0.95em;">(${product.rating})</span></div>
        <div class="product-price">$${product.price}</div>
        <button class="view-btn">View</button>
      `;
      card.querySelector('.view-btn').onclick = (e) => {
        e.stopPropagation();
        window.open(`product.html?id=${product.id}`, '_blank');
      };
      card.onclick = () => {
        window.open(`product.html?id=${product.id}`, '_blank');
      };
      grid.appendChild(card);
    });
  }

  // Initial render
  renderProducts('all', getFilters());
  renderClothingSectionFilter('all');
}

// --- PRODUCT DETAILS PAGE LOGIC ---
if (document.getElementById('product-details')) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = products.find(p => p.id === id);
  const details = document.getElementById('product-details');
  if (!product) {
    details.innerHTML = '<p>Product not found.</p>';
  } else {
    // Get stored customer rating
    let customerRating = parseInt(localStorage.getItem('rating-' + product.id)) || 0;
    details.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="main-product-img" id="main-product-img">
      <div class="product-details-info">
        <h2>${product.name}</h2>
        <div class="product-brand">${product.brand}</div>
        <div class="product-rating">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? '½' : ''} <span style=\"color:#888;font-size:0.95em;\">(${product.rating})</span></div>
        <div class="product-price">$${product.price}</div>
        <p>${product.description}</p>
        <div class="product-buttons" style="display:flex; gap:1rem; margin-top:1rem;">
          <button class="add-cart-btn">Add to Cart</button>
          <button class="buy-now-btn" style="background:linear-gradient(135deg, #667eea 0%, #764ba2 100%); color:white; border:none; padding:0.8rem 1.5rem; border-radius:8px; cursor:pointer; font-weight:600; transition:all 0.3s ease;">Buy Now</button>
        </div>
        <div class="customer-rating-section" style="margin-top:1.5rem;">
          <div style="font-weight:600; margin-bottom:0.5rem;">Rate this product:</div>
          <div id="customer-stars">
            ${[1,2,3,4,5].map(star => `<span class="customer-star" data-star="${star}" style="font-size:2rem; cursor:pointer; color:${customerRating >= star ? '#f7b731' : '#ccc'};">★</span>`).join('')}
            <span id="customer-rating-label" style="margin-left:1rem; font-weight:500; color:#2a7ae4;">${customerRating ? `You rated: ${customerRating} star${customerRating > 1 ? 's' : ''}` : ''}</span>
          </div>
        </div>
      </div>
    `;
    details.querySelector('.add-cart-btn').onclick = () => {
      addToCart(product.id);
      updateCartCount();
      alert('Added to cart!');
    };
    details.querySelector('.buy-now-btn').onclick = () => {
      addToCart(product.id);
      updateCartCount();
      alert('Added to cart!');
    };
    // Make main image clickable for full size
    const mainImg = document.getElementById('main-product-img');
    mainImg.style.cursor = 'zoom-in';
    mainImg.onclick = () => {
      window.open(product.image, '_blank');
    };
    // Customer rating logic
    details.querySelectorAll('.customer-star').forEach(starEl => {
      starEl.onclick = () => {
        const rating = parseInt(starEl.getAttribute('data-star'));
        localStorage.setItem('rating-' + product.id, rating);
        // Update stars
        details.querySelectorAll('.customer-star').forEach(s => {
          s.style.color = parseInt(s.getAttribute('data-star')) <= rating ? '#f7b731' : '#ccc';
        });
        details.querySelector('#customer-rating-label').textContent = `You rated: ${rating} star${rating > 1 ? 's' : ''}`;
      };
    });
  }
}

// --- CART PAGE LOGIC ---
if (document.getElementById('cart-items')) {
  function renderCart() {
    const cart = getCart();
    const cartItems = document.getElementById('cart-items');
    if (cart.length === 0) {
      cartItems.innerHTML = '<p>Your cart is empty.</p>';
      document.getElementById('cart-summary-details').innerHTML = '';
      return;
    }
    cartItems.innerHTML = '';
    cart.forEach(item => {
      const product = products.find(p => p.id === item.id);
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="cart-item-info">
          <h3>${product.name}</h3>
          <div class="product-brand">${product.brand}</div>
          <div class="product-rating">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? '½' : ''} <span style=\"color:#888;font-size:0.95em;\">(${product.rating})</span></div>
          <div class="product-price">$${product.price}</div>
        </div>
        <div class="cart-item-controls">
          <button class="decrease">-</button>
          <span>${item.quantity}</span>
          <button class="increase">+</button>
          <button class="remove">✕</button>
        </div>
      `;
      div.querySelector('.decrease').onclick = () => {
        updateQuantity(item.id, item.quantity - 1);
      };
      div.querySelector('.increase').onclick = () => {
        updateQuantity(item.id, item.quantity + 1);
      };
      div.querySelector('.remove').onclick = () => {
        removeFromCart(item.id);
      };
      cartItems.appendChild(div);
    });
    renderCartSummary();
  }
  function renderCartSummary() {
    const cart = getCart();
    let total = 0;
    cart.forEach(item => {
      const product = products.find(p => p.id === item.id);
      total += product.price * item.quantity;
    });
    document.getElementById('cart-summary-details').innerHTML = `
      <div>Total Items: <b>${cart.reduce((sum, i) => sum + i.quantity, 0)}</b></div>
      <div>Total Price: <b>$${total.toFixed(2)}</b></div>
    `;
  }
  function updateQuantity(id, qty) {
    let cart = getCart();
    cart = cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, qty) } : item);
    setCart(cart);
    renderCart();
    updateCartCount();
  }
  function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    setCart(cart);
    renderCart();
    updateCartCount();
  }
  document.getElementById('checkout-btn').onclick = () => {
    alert('Checkout is not implemented in this demo.');
  };
  renderCart();
}

// --- CART MANAGEMENT ---
function addToCart(productId) {
  let cart = getCart();
  const idx = cart.findIndex(item => item.id === productId);
  if (idx > -1) {
    cart[idx].quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  setCart(cart);
}

document.addEventListener('DOMContentLoaded', updateCartCount); 