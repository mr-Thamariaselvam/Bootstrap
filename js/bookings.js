function getCartItems() {
  const cart = localStorage.getItem('tourCart');
  return cart ? JSON.parse(cart) : [];
}

// Function to add item to cart
function addToCart(item) {
  const cart = getCartItems();
  const exists = cart.some(cartItem => cartItem.id === item.id);

  if (exists) {
    const alertModal = new bootstrap.Modal(document.getElementById('duplicateItemModal'));
    alertModal.show();
    return;
  }

  cart.push(item);
  localStorage.setItem('tourCart', JSON.stringify(cart));
  updateCartCount();
}

// Function to update the cart count badge
function updateCartCount() {
  const count = getCartItems().length;
  const badge = document.getElementById('cartCountBadge');
  if (badge) badge.innerText = count;
}

document.addEventListener('DOMContentLoaded', updateCartCount);
