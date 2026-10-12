const cartCount = document.querySelector('#cart-count');
const addButtons = document.querySelectorAll('.add-button');

let totalItems = 0;

addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    totalItems += 1;
    if (cartCount) {
      cartCount.textContent = totalItems;
    }
    button.textContent = 'Added';
    button.disabled = true;
    button.style.opacity = '0.75';
  });
});

const yearTarget = document.querySelector('#year');
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}
