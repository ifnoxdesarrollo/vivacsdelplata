 const aboutIcon = document.getElementById("aboutIcon");

 var button = document.getElementById("dropdown");
 var dropdownSection = document.getElementById("dateHide");
 const dateIcon = document.getElementById("dropdownIcon");

 button.addEventListener("click", () => {
   if (dropdownSection.classList.contains("hidden")) {
     dropdownSection.classList.remove("hidden");
   } else {
     dropdownSection.classList.add("hidden");
   }

   if (dateIcon.classList.contains("plus")) {
     dateIcon.textContent = "-";
     dateIcon.classList.remove("plus");
   } else {
     dateIcon.textContent = "+";
     dateIcon.classList.add("plus");
   }
 });

 const optionMenu = document.querySelector(".select-menu"),
   selectBtn = optionMenu.querySelector(".select-btn"),
   options = optionMenu.querySelectorAll(".option"),
   sBtn_text = optionMenu.querySelector(".sBtn-text");
 selectBtn.addEventListener("click", () => {
   optionMenu.classList.toggle("active");
   if (aboutIcon.classList.contains("plus")) {
     aboutIcon.textContent = "-";
     aboutIcon.classList.remove("plus");
   } else {
     aboutIcon.textContent = "+";
     aboutIcon.classList.add("plus");
   }
 });
 options.forEach((option) => {
   option.addEventListener("click", () => {
     if (aboutIcon.classList.contains("plus")) {
       aboutIcon.textContent = "-";
       aboutIcon.classList.remove("plus");
     } else {
       aboutIcon.textContent = "+";
       aboutIcon.classList.add("plus");
     }
     let selectedOption = option.querySelector(".option-text").innerText;
     sBtn_text.innerText = selectedOption;
     optionMenu.classList.remove("active");
   });
 });

function saltarAlSiguiente(currentInput, nextInputId) {
  var maxLength = currentInput.getAttribute('maxlength');
  var currentValue = currentInput.value;

  if (currentValue.length == maxLength) {
    var nextInput = document.getElementById(nextInputId);
    if (nextInput) {
      nextInput.focus();
    }
  }
}