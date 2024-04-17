const nav = document.querySelector("nav");
const navbar = document.querySelector(".navbar");
const up = document.getElementById("up");
up.addEventListener("click", () => {
  window.scrollTo(0, 0);
});


window.onscroll = function () {
  if (window.scrollY >= 50) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
};
window.onscroll = function () {
  if (window.scrollY >= 700) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
};

open.pageXOffset = function () {
  if (open.pageXOffset > 1000) {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
};

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-pagination",
    prevEl: ".swiper-pagination",
  },
});

const swiperEl = document.querySelector("swiper-container");
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});
swiperEl.initialize();

const swiperE = document.getElementById("test");
Object.assign(swiperE, {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
swiperE.initialize();


// ==================== The Counter omload page ================
let count = 0;
let counter = document.getElementById("counter");
var visitCount = localStorage.getItem("page_view");
console.log(visitCount);

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counter.innerHTML = visitCount;
