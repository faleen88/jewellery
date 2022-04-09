const initAccordeon = () => {
  if (document.querySelector('[data-accordeon]')) {
    const siteAccordeon = document.querySelector('[data-accordeon]');
    const buttonsAccordeon = siteAccordeon.querySelectorAll('[data-button]');
    const listAccordeon = siteAccordeon.querySelectorAll('[data-accordeon-item]');

    siteAccordeon.classList.remove('is-nojs');

    const getAccordeonContent = function (currentValue) {

      listAccordeon.forEach(function (item) {
        if (item.id === currentValue) {
          if (!item.classList.contains('is-active')) {
            item.classList.add('is-active');
          } else {
            item.classList.remove('is-active');
          }
        }
      });
    };

    buttonsAccordeon.forEach(function (button) {
      button.addEventListener('click', function (evt) {
        getAccordeonContent(evt.target.dataset.button);
      });

      button.addEventListener('keydown', function (evt) {
        if (evt.key === 'Enter') {
          evt.preventDefault();
          getAccordeonContent(evt.target.dataset.button);
        }
      });
    });
  }
};

export {initAccordeon};
