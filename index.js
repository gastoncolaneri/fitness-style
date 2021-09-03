let burgerMenuIcon = document.querySelector('#burgerIcon');
let burgerMenu = document.querySelector('#burgerMenu');
let blockBurger = document.querySelector('.blockBurgerMenu');

const openMenu = () => {
  if (burgerMenu.classList.contains('dNone') === true) {
    burgerMenu.classList.remove('dNone');
  } else {
    burgerMenu.classList.add('dNone');
  }
};

const closeMenu = () => {
  burgerMenu.classList.add('dNone');
};

burgerMenuIcon.addEventListener('click', openMenu);
burgerMenu.addEventListener('click', closeMenu);
