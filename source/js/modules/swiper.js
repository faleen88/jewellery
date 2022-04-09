const initSwiper = () => {
  if (document.querySelector('[data-slider]')) {
    const renderPagination = (index, className) => '<span class="' + className + '">' + (index + 1) + '</span>';

    // eslint-disable-next-line no-undef
    const swiper = new Swiper('[data-slider]', {
      navigation: {
        nextEl: '[data-button-next]',
        prevEl: '[data-button-prev]',
      },
      pagination: {
        el: '[data-pagination]',
        tupe: 'bullets',
        clickable: true,
        renderBullet: renderPagination,
      },
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          touchRatio: 0,
        },
      },
    });

    const SLIDES_VIEW_MOBILE = 2;

    let allSlides = document.querySelector('[data-slides-total]');
    let currentSlides = document.querySelector('[data-slides-current]');

    allSlides.textContent = Math.ceil(swiper.slides.length / SLIDES_VIEW_MOBILE);
    currentSlides.textContent = ++swiper.realIndex;

    swiper.on('slideChange', function () {
      let currentSlide = swiper.realIndex + SLIDES_VIEW_MOBILE;
      currentSlides.textContent = Math.ceil(currentSlide / SLIDES_VIEW_MOBILE);

    });
  }
};

export {initSwiper};
