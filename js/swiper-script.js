const swiper = new Swiper("#swiperP8", {
  speed: 700,
  spaceBetween: 100,
  loop: true, // Permite el bucle continuo del carrusel
  disableOnInteraction: false,
  allowTouchMove: false,
});
const swiper2 = new Swiper("#swiper2P8", {
  speed: 700,
  spaceBetween: 100,
  loop: true, // Permite el bucle continuo del carrusel
  disableOnInteraction: false,
  allowTouchMove: false,
});
const swiper3 = new Swiper("#swiper3P8", {
  speed: 700,
  spaceBetween: 100,
  loop: true, // Permite el bucle continuo del carrusel
  disableOnInteraction: false,
  allowTouchMove: false,
});
const swiper4 = new Swiper("#swiper4P8", {
  speed: 700,
  spaceBetween: 100,
  loop: true, // Permite el bucle continuo del carrusel
  disableOnInteraction: false,
  allowTouchMove: false,
});

const swiperScroll3 = new Swiper(".swiperScroll3", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".flecha-1",
    prevEl: ".flecha-1-prev",
  },
  speed: 400,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    470: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 10,
    },
    495: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: -50,
    },
    610: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: -100,
    },
    716: {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 10,
    },
    769: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: -100,
    },
    890: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: -200,
    },
    993: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1083: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: -100,
    },
    1200: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: -200,
    },
    1379: {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1511: {
      loop: false,
      slidesPerView: 3,
      spaceBetween: -100,
    },
    1639: {
      loop: false,
      slidesPerView: 3,
      spaceBetween: -200,
    },
    1768: {
      loop: false,
      slidesPerView: 3,
      spaceBetween: -250,
    },
    1920: {
      loop: false,
      slidesPerView: 4,
      spaceBetween: -50,
    },
    2420: {
      loop: false,
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

var flecha1 = document.querySelector(".flecha-1");
var flecha2 = document.querySelector(".flecha-1-prev");

var swiperElement = document.getElementById("swiperWrapper");

var observer = new MutationObserver(observeChanges);

var config = { attributes: true, attributeFilter: ["style"] };
observer.observe(swiperElement, config);

function observeChanges(mutationsList, observer) {
  for (var mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "style") {
      checkSwiperElement();
    }
  }
}

var swiperImg1 = document.getElementById("swiperImg1");
var swiperImg7 = document.getElementById("swiperImg7");
var swiperImg8 = document.getElementById("swiperImg8");
var swiperImg9 = document.getElementById("swiperImg9");
var swiperImg10 = document.getElementById("swiperImg10");

function checkSwiperElement() {
  var windowWidth = window.innerWidth;

  switch (true) {
    case windowWidth >= 2420:
      if (swiperImg7.classList.contains("swiper-slide-next")) {
        flecha1.classList.add("hidden");
        flecha2.classList.remove("hide-flecha");
      }
      if (swiperImg1.classList.contains("swiper-slide-active")) {
        flecha1.classList.remove("hidden");
        flecha2.classList.add("hide-flecha");
      }
      break;

    case windowWidth >= 1919:
      if (swiperImg8.classList.contains("swiper-slide-next")) {
        flecha1.classList.add("hidden");
        flecha2.classList.remove("hide-flecha");
      }
      if (swiperImg1.classList.contains("swiper-slide-active")) {
        flecha1.classList.remove("hidden");
        flecha2.classList.add("hide-flecha");
      }
      break;

    case windowWidth >= 1768:
      if (swiperImg10.classList.contains("swiper-slide-next")) {
        flecha1.classList.add("hidden");
        flecha2.classList.remove("hide-flecha");
      }
      if (swiperImg1.classList.contains("swiper-slide-active")) {
        flecha1.classList.remove("hidden");
        flecha2.classList.add("hide-flecha");
      }
      break;

      case windowWidth >= 1368:
      if (swiperImg9.classList.contains("swiper-slide-next")) {
        flecha1.classList.add("hidden");
        flecha2.classList.remove("hide-flecha");
      }
      if (swiperImg1.classList.contains("swiper-slide-active")) {
        flecha1.classList.remove("hidden");
        flecha2.classList.add("hide-flecha");
      }
      break;

    case windowWidth >= 768:
      if (swiperImg10.classList.contains("swiper-slide-next")) {
        flecha1.classList.add("hidden");
        flecha2.classList.remove("hide-flecha");
      }
      if (swiperImg1.classList.contains("swiper-slide-active")) {
        flecha1.classList.remove("hidden");
        flecha2.classList.add("hide-flecha");
      }
      break;

    case windowWidth < 768:
      if (swiperImg9.classList.contains("swiper-slide-next")) {
        flecha1.classList.add("hidden");
        flecha2.classList.remove("hide-flecha");
      }
      if (swiperImg1.classList.contains("swiper-slide-active")) {
        flecha1.classList.remove("hidden");
        flecha2.classList.add("hide-flecha");
      }
      break;

    default:
      break;
  }
}

function nextSlide(swiper) {
  swiper.slideNext();
}

swiper.on(
  "init",
  setInterval(function () {
    nextSlide(swiper);
  }, 6000)
);
swiper2.on(
  "init",
  setTimeout(function () {
    setInterval(function () {
      nextSlide(swiper2);
    }, 6000);
  }, 2500)
);
swiper3.on(
  "init",
  setTimeout(function () {
    setInterval(function () {
      nextSlide(swiper3);
    }, 6000);
  }, 1500)
);
swiper4.on(
  "init",
  setTimeout(function () {
    setInterval(function () {
      nextSlide(swiper4);
    }, 6000);
  }, 3500)
);
