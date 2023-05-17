new Swiper(".banner", {
  wrapperClass: "banner__wrapper", // для переопределения swiper-wrapper на свой класс
  slideClass: "banner__slide",//для переопределения swiper-slide на свой класс
  // Optional parameters

  // If we need pagination
  pagination: {
    el: ".banner__pagination", //для переопределения swiper-pagination на свой класс
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".banner__next",
    prevEl: ".banner__prev",
  },
});
console.dir(Swiper);
