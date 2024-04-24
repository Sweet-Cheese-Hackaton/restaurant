// Получаем необходимые элементы из DOM
const cartBtn = document.getElementById('cart');
const modal = document.getElementById('cartModal');
const closeBtn = document.getElementsByClassName('close')[0];
const clearCartBtn = document.getElementById('clearCartBtn');
const cartItemsList = document.getElementById('cartItems');

// Открываем модальное окно корзины при клике на кнопку "Корзина"
cartBtn.onclick = function() {
  modal.style.display = 'block';
}

// Закрываем модальное окно корзины при клике на кнопку закрытия
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Закрываем модальное окно корзины при клике вне его области
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Очищаем корзину при клике на кнопку "Очистить корзину"
clearCartBtn.onclick = function() {
  cartItemsList.innerHTML = '';
}

// Функция для добавления элемента в корзину
function addToCart(itemName) {
  const li = document.createElement('li');
  li.textContent = itemName;
  li.classList.add('cart-item'); // Добавляем класс для анимации
  cartItemsList.appendChild(li);
}

// Пример использования: добавляем обработчик для всех кнопок "В корзину"
document.querySelectorAll('.add-to-cart-btn').forEach(item => {
  item.addEventListener('click', event => {
    const menuItem = event.target.parentElement.querySelector('h3').textContent;
    addToCart(menuItem);
  });
});

