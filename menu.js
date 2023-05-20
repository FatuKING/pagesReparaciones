const menuBtn = document.getElementById('menuBtn');
const menuContainer = document.getElementById('menuContenedor');

menuBtn.addEventListener('click', () => {
  menuContainer.classList.toggle('show');
  menuBtn.classList.toggle('open');
});