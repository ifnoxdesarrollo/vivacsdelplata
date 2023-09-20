
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    const track = document.querySelector('.track');

    const carouselWidth = document.querySelector('.carousel-container').offsetWidth;
    let index = 0;

    next.addEventListener('click', () => {
        index++;
        prev.classList.add('show');
        track.style.transform = `translateX(-${index * carouselWidth}px)`;
        if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
            // Si el slider se sale del container
            next.classList.add('hide');
            prev.classList.remove('hide');
        }

    })
    prev.addEventListener('click', () => {
        index--;
        track.style.transform = `translateX(-${index * carouselWidth}px)`;
        if (index == 0) {
            next.classList.remove('hide');
            prev.classList.add('hide');
        }

    })
