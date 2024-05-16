// Restringe la entrada de caracteres a solo números para los campos de número de tarjeta, fecha de vencimiento y CVV
document.getElementById('card-number').addEventListener('input', function(e) {
  this.value = this.value.replace(/[^\d]/g, '');
});

document.getElementById('expiry').addEventListener('input', function(e) {
  this.value = this.value.replace(/[^\d]/g, '');
});

document.getElementById('cvv').addEventListener('input', function(e) {
  this.value = this.value.replace(/[^\d]/g, '');
});
