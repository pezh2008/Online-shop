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

const tabs = document.querySelectorAll(".products__info-link");
const contents = document.querySelectorAll(".products__cards");

tabs.forEach((el, index) => {
  el.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    el.classList.add("active-tab");
    contents.forEach((el) => {
      el.classList.remove("active-cards");
    });
    contents[index].classList.add("active-cards");
  });
});

new Swiper(".services__content", {
  wrapperClass: "services__list",
  slideClass: "services__item",
  slidesPerView: 2,
  spaceBetween: 30,

  navigation: {
    nextEl: ".services__next",
    prevEl: ".services__prev",
  },

  pagination: {
    el: ".services__pagination",
    clickable: true,
  },
});

// http://localhost:3000/products
const renderCards = (data) => {
  const testContent = document.querySelector(".test__container");
  data.forEach((item) => {
    const card = `
  <div class="products__card">
  <p>${item.id}</p>
  <P>${item.title}</P>
            <div class="products__card-decor products__card-decor_new">
              новинки
            </div>
            <div class="products__card-image">
              <img
                class="products__card-img"
                src=${item.img}
                alt=""
              />
            </div>
            <div class="products__card-box">
              <p class="products__card-name">Наименование</p>
              <p class="products__card-brand">Бренд:</p>
              <p class="products__card-cantry">Страна: ${item.country}</p>
              <a class="products__card-stock" href="#"
                >В наличии:
                <svg
                  class="products__card-stock_svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 8.125L5.625 11.25L12.5 4.375"
                    stroke="#4798DE"
                    stroke-linecap="square"
                  />
                </svg>
              </a>
              <p class="products__card-price">${item.price}₽</p>
            </div>

            <div class="products__card-button">
              <button class="products__card-bag">В корзину</button>
              <div class="products__card-social">
                <a class="products__card-link" href="#">
                  <svg
                    class="prodicts__card-svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5007 21.875L10.9902 20.5262C5.62565 15.7544 2.08398 12.6073 2.08398 8.74489C2.08398 5.59775 4.60482 3.125 7.81315 3.125C9.62565 3.125 11.3652 3.95266 12.5007 5.26056C13.6361 3.95266 15.3757 3.125 17.1882 3.125C20.3965 3.125 22.9173 5.59775 22.9173 8.74489C22.9173 12.6073 19.3757 15.7544 14.0111 20.5364L12.5007 21.875Z"
                      stroke="#4798DE"
                      stroke-width="2"
                      stroke-linecap="square"
                    />
                  </svg>
                </a>
                <a class="proucts__card-link" href="#">
                  <svg
                    class="products__card-svgА"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 25H25"
                      stroke="#4798DE"
                      stroke-width="2"
                      stroke-linecap="square"
                    />
                    <path
                      d="M7.5 25L7.5 11.25H12.5V25"
                      stroke="#4798DE"
                      stroke-width="2"
                      stroke-linecap="square"
                    />
                    <path
                      d="M12.5 25L12.5 6.25H17.5V25"
                      stroke="#4798DE"
                      stroke-width="2"
                      stroke-linecap="square"
                    />
                    <path
                      d="M17.5 25V15H22.5V25"
                      stroke="#4798DE"
                      stroke-width="2"
                      stroke-linecap="square"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
  `;
    testContent.innerHTML += card;
  });
};
// const getProducts = () => {
//   fetch("http://localhost:3000/products")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       renderCards(data);
//     });
// };

// getProducts();

const getUsers = () => {
  fetch("http://localhost:3000/user")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((user) => {
        document.querySelector(".list").innerHTML += `<li>${user.name}</li>`;
      });
    });
};

document.querySelector(".bibi").addEventListener("click", () => {
  getUsers();
});

new Swiper(".discounts__content", {
  wrapperClass: "discounts__list",
  slideClass: "discounts__item",
  slidesPerView: 2,

  navigation: {
    nextEl: ".discounts__next",
    prevEl: ".discounts__prev",
  },

  pagination: {
    el: ".discounts__pagination",
    clickable: true,
  },
});

new Swiper(".brands__content", {
  wrapperClass: "brands__list",
  slideClass: "brands__item",
  slidesPerView: 2,
  spaceBetween: 30,
  

  navigation: {
    nextEl: ".brands__next",
    prevEl: ".brands__prev",
  },
});
