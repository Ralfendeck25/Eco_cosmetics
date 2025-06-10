'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#Hydrophilic-oil') {
    document.body.classList.add('page__body--with-card');
  } else {
    document.body.classList.remove('page__body--with-card');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#ubtan') {
    document.body.classList.add('page__body--with-card');
  } else {
    document.body.classList.remove('page__body--with-card');
  }
});

// Tab functionality
const tabItems = document.querySelectorAll('.shop__nav-item');
const productCards = document.querySelectorAll('.shop__product-card');

tabItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all tabs
    tabItems.forEach(tab => tab.classList.remove('active'));

    // Add active class to clicked tab
    item.classList.add('active');

    // Filter products (simplified example)
    const category = item.textContent.trim().toLowerCase();
    productCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.shop__add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const productCard = e.target.closest('.shop__product-card');
    const productName = productCard.querySelector('.shop__name').textContent;
    const productPrice = productCard.querySelector('.shop__price').textContent;

    // Add to cart logic here
    console.log(`Added ${productName} (${productPrice}) to cart`);

    // Visual feedback
    button.textContent = 'Added!';
    setTimeout(() => {
      button.textContent = 'Add to Cart';
    }, 1000);
  });
});

// Add to smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
