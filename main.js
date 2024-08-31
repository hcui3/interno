const navMenuBtn = document.querySelector("#nav_menu_btn");
const navMenu = document.querySelector("#nav_menu");

navMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-is-open");
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("header-is-active");
  } else {
    header.classList.remove("header-is-active");
  }
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
