const initMenu = () => {
  const siteBody = document.querySelector('.page__body');
  const mainNav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav__toggle');

  mainNav.classList.remove('nav--nojs');

  const closeMenu = function () {
    mainNav.classList.remove('nav--opened');
    mainNav.classList.add('nav--closed');
    siteBody.classList.remove('overflow-hidden');
  };

  const openMenu = function () {
    mainNav.classList.remove('nav--closed');
    mainNav.classList.add('nav--opened');
    siteBody.classList.add('overflow-hidden');
  };

  navToggle.addEventListener('click', function () {
    if (mainNav.classList.contains('nav--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
};

export {initMenu};
