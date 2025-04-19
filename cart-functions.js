<script>
function addToCart(title, image, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.title === title);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ title, image, price, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html";
}

function displayCart() {
  const cartContainer = document.getElementById("cart-items");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartContainer.innerHTML = "";

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="cart-image">
      <div class="cart-details">
        <h3>${item.title}</h3>
        <p>Price: $${item.price.toFixed(2)}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Subtotal: $${itemTotal.toFixed(2)}</p>
      </div>
    `;
    cartContainer.appendChild(itemElement);
  });

  const totalElement = document.getElementById("cart-total");
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

if (window.location.pathname.includes("cart.html")) {
  window.onload = displayCart;
}
</script>
