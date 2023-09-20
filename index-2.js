// function cambiarImagen(nuevaImagen) {
//   document.querySelector(".imagen-principal").src = nuevaImagen;
// }

// // const slider = document.querySelector('.slider');
// // const prevBtn = document.querySelector('.prev-btn');
// // const nextBtn = document.querySelector('.next-btn');

// // let currentIndex = 0;

// // function updateSlider() {
// //   slider.style.transform = `translateX(-${currentIndex *100}%)`;
// // }

// // prevBtn.addEventListener('click', () => {
// //   currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
// //   updateSlider();
// // });

// // nextBtn.addEventListener('click', () => {
// //   currentIndex = (currentIndex + 1) % slider.children.length;
// //   updateSlider();
// // });


// document.addEventListener("DOMContentLoaded", function () {
//   const sliderContainer = document.querySelector(".slider-container-1");
//   const slider = document.querySelector(".slider");
//   const slides = document.querySelectorAll(".slide");
//   const prevBtn = document.querySelector(".prev-btn");
//   const nextBtn = document.querySelector(".next-btn");
//   let currentIndex = 0;
//   const slideWidth = slides[0].clientWidth;

//   function updateSlider() {
//     slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//   }

//   prevBtn.addEventListener("click", () => {
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateSlider();
//     }
//   });

//   nextBtn.addEventListener("click", () => {
//     if (currentIndex < slides.length - 1) {
//       currentIndex++;
//       updateSlider();
//     }
//   });

//   updateSlider();
// });


// const slider2 = document.querySelector('.slider-general');
// const prevBtn2 = document.querySelector('.prev-btn2');
// const nextBtn2 = document.querySelector('.next-btn2');

// let currentIndex2 = 0;

// function updateSlider2() {
//   slider2.style.transform = `translateX(-${currentIndex2 *100}%)`;
// }

// prevBtn2.addEventListener('click', () => {
//   currentIndex2 = (currentIndex2 - 1 + slider2.children.length) % slider2.children.length;
//   updateSlider2();
// });

// nextBtn2.addEventListener('click', () => {
//   currentIndex2 = (currentIndex2 + 1) % slider2.children.length;
//   updateSlider2();
// });



// const slider3 = document.querySelector('.slider-general2');
// const prevBtn3 = document.querySelector('.prev-btn3');
// const nextBtn3 = document.querySelector('.next-btn3');

// let currentIndex3 = 0;

// function updateSlider3() {
//   slider3.style.transform = `translateX(-${currentIndex3 *100}%)`;
// }

// prevBtn3.addEventListener('click', () => {
//   currentIndex3 = (currentIndex3 - 1 + slider3.children.length) % slider3.children.length;
//   updateSlider3();
// });

// nextBtn3.addEventListener('click', () => {
//   currentIndex3 = (currentIndex3 + 1) % slider3.children.length;
//   updateSlider3();
// });
