document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('product-list');

  if (productList) {
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
        <a class="btn" href="product.html?id=${p.id}" style="margin-top:10px; display:inline-block;">View</a>
      `;
      productList.appendChild(card);
    });
  }
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(p => p.id === id);
  const existing = cart.find(p => p.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}
