var buttonAtamisque = document.getElementById("dropdownButtonAtamisque");
var contentAtamisque = document.getElementById("dropdownAtamisque");
const iconoAtamisque = document.getElementById("plusAtamisque");
var buttonCountry = document.getElementById("dropdownButtonCountry");
var contentCountry = document.getElementById("dropdownCountry");
const iconoCountry = document.getElementById("plusCountry");
var buttonMotorcycle = document.getElementById("dropdownButtonMotorcycle");
var itineraryMotorcycle = document.getElementById("itineraryMotorcycle");

const hideItinerary = () => {
  itineraryMotorcycle.classList.add("hidden");
};

const hideAtamisque = () => {
  contentAtamisque.classList.add("hidden");
};

const hideCountry = () => {
  contentCountry.classList.add("hidden");
};

buttonMotorcycle.addEventListener("click", () => {
  if (itineraryMotorcycle.classList.contains("hidden")) {
    itineraryMotorcycle.classList.remove("fade-slide-up");
    itineraryMotorcycle.classList.remove("hidden");
  } else {
    itineraryMotorcycle.classList.add("fade-slide-up");
    setTimeout(hideItinerary, 700);
  }

  if (buttonMotorcycle.classList.contains("plus")) {
    buttonMotorcycle.textContent = "-";
    buttonMotorcycle.classList.remove("plus");
  } else {
    buttonMotorcycle.textContent = "+";
    buttonMotorcycle.classList.add("plus");
  }
});

buttonAtamisque.addEventListener("click", () => {
  if (contentAtamisque.classList.contains("hidden")) {
    contentAtamisque.classList.remove("fade-slide-up");
    contentAtamisque.classList.remove("hidden");
  } else {
    contentAtamisque.classList.add("fade-slide-up");
    setTimeout(hideAtamisque, 700);
  }

  if (buttonAtamisque.classList.contains("plusx")) {
    buttonAtamisque.textContent = "-";
    buttonAtamisque.classList.remove("plusx");
  } else {
    buttonAtamisque.textContent = "+";
    buttonAtamisque.classList.add("plusx");
  }
});

buttonCountry.addEventListener("click", () => {
  if (contentCountry.classList.contains("hidden")) {
    contentCountry.classList.remove("fade-slide-up");
    contentCountry.classList.remove("hidden");
  } else {
    contentCountry.classList.add("fade-slide-up");
    setTimeout(hideCountry, 700);
  }

  if (buttonCountry.classList.contains("plusx")) {
    buttonCountry.textContent = "-";
    buttonCountry.classList.remove("plusx");
  } else {
    buttonCountry.textContent = "+";
    buttonCountry.classList.add("plusx");
  }
});

const hoverableElementsP7 = document.querySelectorAll(".hoverable-p7");
var pairElement;
hoverableElementsP7.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    if (element.classList.contains("gray")) {
      pairElement = document.querySelector("#" + element.classList[0]);
      pairElement.classList.add("circle-black");
      pairElement.classList.remove("circle-gray");
      element.classList.add("black");
      element.firstElementChild.classList.add("itinerary-text-p7-hover");
      element.classList.remove("gray");
    }
    if (element.classList.contains("circle-gray")) {
      pairElement = document.querySelector("#" + element.classList[0]);
      pairElement.classList.add("black");
      pairElement.classList.remove("gray");
      element.classList.add("circle-black");
      element.classList.remove("circle-gray");
    }
  });

  element.addEventListener("mouseleave", () => {
    if (element.classList.contains("black")) {
      pairElement = document.querySelector("#" + element.classList[0]);
      pairElement.classList.add("circle-gray");
      pairElement.classList.remove("circle-black");
      element.classList.add("gray");
      element.firstElementChild.classList.remove("itinerary-text-p7-hover");
      element.classList.remove("black");
    }
    if (element.classList.contains("circle-black")) {
      pairElement = document.querySelector("#" + element.classList[0]);
      pairElement.classList.add("gray");
      pairElement.classList.remove("black");
      element.classList.add("circle-gray");
      element.classList.remove("circle-black");
    }
  });
});

const swiperP7 = new Swiper("#swiperP7", {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: "#swiper-button-next-p7",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1601: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
const swiper2P7 = new Swiper("#swiper2P7", {
  spaceBetween: 40,
  loop: true,
  initialSlide: 8,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: "#swiper-button-next2-p7",
    prevEl: "#swiper-button-prev2-p7",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1601: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
const swiper3P7 = new Swiper("#swiper3P7", {
  spaceBetween: 40,
  loop: true,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: "#swiper-button-next3-p7",
    prevEl: "#swiper-button-prev3-p7",
  },
  breakpoints: {

    1200: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1601: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
