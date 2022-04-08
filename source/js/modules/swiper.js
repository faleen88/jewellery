const initSwiper = () => {
  /* eslint-disable */
  const swiper = new Swiper('.slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.slider__pagination',
      tupe: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) +'</span>';
      },
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

  let allSlides = document.querySelector('.slider__total')
  let currentSlides = document.querySelector('.slider__current')

  allSlides.textContent = swiper.slides.length / SLIDES_VIEW_MOBILE;
  currentSlides.textContent = ++swiper.realIndex;

  swiper.on('slideChange', function () {
    let currentSlide = swiper.realIndex + SLIDES_VIEW_MOBILE;
    currentSlides.textContent = currentSlide / SLIDES_VIEW_MOBILE;

  });
};

export {initSwiper};
