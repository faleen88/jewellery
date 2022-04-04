const initSwiper = () => {
  /* eslint-disable */
  const swiper = new Swiper('.slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) +'</span>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });
  return swiper;
};

export {initSwiper};
