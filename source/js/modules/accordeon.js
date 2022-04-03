const initAccordeon = () => {
  const siteAccordeon = document.querySelector('.accordeon');
  const buttonsAccordeon = siteAccordeon.querySelectorAll('.accordeon__button');
  const listAccordeon = siteAccordeon.querySelectorAll('.accordeon__item');

  siteAccordeon.classList.remove('accordeon--nojs');

  const getAccordeonContent = function (currentValue) {

    listAccordeon.forEach(function (item) {
      if (item.id === currentValue) {
        if (!item.classList.contains('accordeon__item--active')) {
          item.classList.add('accordeon__item--active');
        } else {
          item.classList.remove('accordeon__item--active');
        }
      }

      if (item.id !== currentValue) {
        item.classList.remove('accordeon__item--active');
      }
    });
  };

  buttonsAccordeon.forEach(function (button) {
    button.addEventListener('click', function (evt) {
      getAccordeonContent(evt.target.dataset.item);
    });

    button.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        evt.preventDefault();
        getAccordeonContent(evt.target.dataset.item);
      }
    });
  });
};

export {initAccordeon};
