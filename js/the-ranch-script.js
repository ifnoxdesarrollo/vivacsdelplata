var boton = document.getElementById("cardTitle");
    var textoDesplegable = document.getElementById("textoDesplegable");
    const toggleText = document.getElementById('cardIcon');
    var boton2 = document.getElementById("cardTitle2");
    var textoDesplegable2 = document.getElementById("textoDesplegable2");
    const toggleText2 = document.getElementById('cardIcon2');
    var boton3 = document.getElementById("cardTitle3");
    var textoDesplegable3 = document.getElementById("textoDesplegable3");
    const toggleText3 = document.getElementById('cardIcon3');
    var boton4 = document.getElementById("cardTitle4");
    var textoDesplegable4 = document.getElementById("textoDesplegable4");
    const toggleText4 = document.getElementById('cardIcon4');

    const hideTexto = () =>{
        textoDesplegable.classList.add('hidden')
    }
    const hideTexto2 = () =>{
        textoDesplegable2.classList.add('hidden')
    }
    const hideTexto3 = () =>{
        textoDesplegable3.classList.add('hidden')
    }
    const hideTexto4 = () =>{
        textoDesplegable4.classList.add('hidden')
    }

    boton.addEventListener('click', () => {
  if (textoDesplegable.classList.contains('hidden')) {
    textoDesplegable.classList.remove('fade-slide-up');
    textoDesplegable.classList.remove('hidden');
      } else {
        textoDesplegable.classList.add('fade-slide-up');
        setTimeout(hideTexto, 700);
     }

     if (toggleText.classList.contains('plus1')) {
       toggleText.textContent = '-';
       toggleText.classList.remove('plus1');
     } else {
       toggleText.textContent = '+';
       toggleText.classList.add('plus1');
     }
    });
    boton2.addEventListener('click', () => {
  if (textoDesplegable2.classList.contains('hidden')) {
    textoDesplegable2.classList.remove('fade-slide-up');
    textoDesplegable2.classList.remove('hidden');
      } else {
        textoDesplegable2.classList.add('fade-slide-up');
        setTimeout(hideTexto2, 700);
     }

     if (toggleText2.classList.contains('plus2')) {
       toggleText2.textContent = '-';
       toggleText2.classList.remove('plus2');
     } else {
       toggleText2.textContent = '+';
       toggleText2.classList.add('plus2');
     }
    });
    boton3.addEventListener('click', () => {
  if (textoDesplegable3.classList.contains('hidden')) {
    textoDesplegable3.classList.remove('fade-slide-up');
    textoDesplegable3.classList.remove('hidden');
      } else {
        textoDesplegable3.classList.add('fade-slide-up');
        setTimeout(hideTexto3, 700);
     }

     if (toggleText3.classList.contains('plus3')) {
       toggleText3.textContent = '-';
       toggleText3.classList.remove('plus3');
     } else {
       toggleText3.textContent = '+';
       toggleText3.classList.add('plus3');
     }
    });
    boton4.addEventListener('click', () => {
  if (textoDesplegable4.classList.contains('hidden')) {
    textoDesplegable4.classList.remove('fade-slide-up');
    textoDesplegable4.classList.remove('hidden');
      } else {
        textoDesplegable4.classList.add('fade-slide-up');
        setTimeout(hideTexto4, 700);
     }

     if (toggleText4.classList.contains('plus4')) {
       toggleText4.textContent = '-';
       toggleText4.classList.remove('plus4');
     } else {
       toggleText4.textContent = '+';
       toggleText4.classList.add('plus4');
     }
    });