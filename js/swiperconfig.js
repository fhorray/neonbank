var swiper = new Swiper(".depoimentos-slide", {
  slidesPerView: 3,
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    500: {
      slidesPerView: 1.6,
      spaceBetween: 16,
    },
    600: {
      slidesPerView: 1.6,
      spaceBetween: 16,
    },
    800: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
