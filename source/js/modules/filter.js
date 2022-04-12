const initFilter = () => {
  if (document.querySelector('[data-accordeon="filter"]')) {
    const siteBody = document.querySelector('.page__body');
    const filter = document.querySelector('[data-accordeon="filter"]');
    const buttonFilterOpen = document.querySelector('[data-open-filter]');
    const formFilter = filter.querySelector('[data-form-filter]');
    const buttonFilterClose = document.querySelector('[data-close-filter]');
    const form = filter.querySelector('#filter');

    filter.classList.remove('is-nojs');
    formFilter.classList.add('is-mobile');

    const closeFilter = function () {
      filter.classList.remove('is-opened');
      filter.classList.add('is-closed');
      siteBody.classList.remove('scroll-lock');
      buttonFilterClose.removeEventListener('click', closeFilter);
    };

    const openFilter = function () {
      filter.classList.remove('is-closed');
      filter.classList.add('is-opened');
      siteBody.classList.add('scroll-lock');
    };

    buttonFilterOpen.addEventListener('click', function () {
      if (filter.classList.contains('is-closed')) {
        openFilter();
        buttonFilterClose.addEventListener('click', closeFilter);
      }
    });

    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
      closeFilter();
    });
  }
};

export {initFilter};
