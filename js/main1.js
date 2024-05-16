// Función para añadir un producto al carrito
function addToCart(button) {
  const card = button.closest('.card');
  const title = card.querySelector('.card-title').innerText;
  const price = parseFloat(card.querySelector('.card-price').innerText.replace('$', ''));
  totalPrice += price;
  
  const cartList = document.getElementById('cart-list');
  const newItem = document.createElement('li');
  newItem.textContent = title + ' - $' + price.toFixed(2);
  
  // Crear botón de eliminar
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Eliminar';
  removeButton.classList.add('remove-btn');
  removeButton.onclick = function() {
    removeProduct(newItem, price); // Pasar el elemento y el precio del producto para restar del total
  };
  newItem.appendChild(removeButton);
  
  cartList.appendChild(newItem);
  
  updateTotalPrice();
}

// Función para eliminar un producto del carrito
function removeProduct(item, price) {
  // Eliminar el elemento <li> que contiene el producto a eliminar
  item.parentNode.removeChild(item);
  
  // Restar el precio del producto eliminado del precio total
  totalPrice -= price;
  
  updateTotalPrice();
}


// Función para vaciar el carrito
function clearCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';
  totalPrice = 0;
  updateTotalPrice();
}

// Función para eliminar un producto del carrito
function removeProduct(item) {
  // Elimina el elemento <li> que contiene el producto a eliminar
  item.parentNode.removeChild(item);
}

// Función para actualizar el precio total
function updateTotalPrice() {
  const totalPriceElement = document.getElementById('total-price');
  totalPriceElement.textContent = 'Total: $' + totalPrice.toFixed(2);
}

// Inicialización de la variable totalPrice
let totalPrice = 0;
    
    // Función para actualizar el precio total con efecto de cambio de color
function updateTotalPrice() {
  const totalPriceElement = document.getElementById('total-price');
  const oldTotalPrice = parseFloat(totalPriceElement.textContent.replace('Total: $', ''));
  const newTotalPrice = totalPrice;
  
  // Aplicar clase para indicar aumento o disminución
  if (newTotalPrice > oldTotalPrice) {
    totalPriceElement.classList.remove('total-price-decrease');
    totalPriceElement.classList.add('total-price-increase');
  } else if (newTotalPrice < oldTotalPrice) {
    totalPriceElement.classList.remove('total-price-increase');
    totalPriceElement.classList.add('total-price-decrease');
  }
  
  // Actualizar el texto del precio total
  totalPriceElement.textContent = 'Total: $' + newTotalPrice.toFixed(2);
  
  // Eliminar la clase después de un breve tiempo para el siguiente cambio
  setTimeout(() => {
    totalPriceElement.classList.remove('total-price-increase', 'total-price-decrease');
  }, 1000);
}
