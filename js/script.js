new Swiper(".banner", {
  wrapperClass: "banner__wrapper", // для переопределения swiper-wrapper на свой класс
  slideClass: "banner__slide", //для переопределения swiper-slide на свой класс
  // Optional parameters

  // If we need pagination
  pagination: {
    el: ".banner__pagination", //для переопределения swiper-pagination на свой класс
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".banner__next",
    prevEl: ".banner__prev",
  },
});

new Swiper(".stock-slider", {
  wrapperClass: "stock-slider__wrapper",
  slideClass: "stock-slider__slide",
  spaceBetween: 30, // Растояние между сладерами
  slidesPerView: 3, // Количество отображаемых слайдов

  pagination: {
    el: ".stock-slider__pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".stock-slider__next",
    prevEl: ".stock-slider__prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    980: {
      slidesPerView: 3,
    },
  },
});







// btns.forEach((el, iBtn) => {
//   el.addEventListener("click", () => {
//     contents.forEach((el, icon) => {
//       console.log(el);
//     });
//   });
// });
