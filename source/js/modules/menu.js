const initMenu = () => {
  if (document.querySelector('[data-navigation]')) {
    const siteBody = document.querySelector('.page__body');
    const mainNav = document.querySelector('[data-navigation]');
    const navToggle = document.querySelector('[data-toggle]');

    mainNav.classList.remove('is-nojs');

    const closeMenu = function () {
      mainNav.classList.remove('is-opened');
      mainNav.classList.add('is-closed');
      siteBody.classList.remove('overflow-hidden');
    };

    const openMenu = function () {
      mainNav.classList.remove('is-closed');
      mainNav.classList.add('is-opened');
      siteBody.classList.add('overflow-hidden');
    };

    navToggle.addEventListener('click', function () {
      if (mainNav.classList.contains('is-closed')) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }
};

export {initMenu};
