const initFilter = () => {
  if (document.querySelector('.catalog__filter')) {
    const siteBody = document.querySelector('.page__body');
    const filter = document.querySelector('.catalog__filter');
    const buttonFilterOpen = document.querySelector('.catalog__button');
    const formFilter = filter.querySelector('.form-filter');
    const buttonFilterClose = document.querySelector('.form-filter__button-close');
    const form = filter.querySelector('#filter');

    filter.classList.remove('catalog__filter--nojs');
    formFilter.classList.add('form-filter--mobile');

    const closeFilter = function () {
      filter.classList.remove('catalog__filter--opened');
      filter.classList.add('catalog__filter--closed');
      siteBody.classList.remove('overflow-hidden');
      buttonFilterClose.removeEventListener('click', closeFilter);
    };

    const openFilter = function () {
      filter.classList.remove('catalog__filter--closed');
      filter.classList.add('catalog__filter--opened');
      siteBody.classList.add('overflow-hidden');
    };

    buttonFilterOpen.addEventListener('click', function () {
      if (filter.classList.contains('catalog__filter--closed')) {
        openFilter();
      }
    });

    buttonFilterClose.addEventListener('click', closeFilter);

    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
      closeFilter();
    });
  }
};

export {initFilter};
