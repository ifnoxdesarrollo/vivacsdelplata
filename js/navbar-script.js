const hamburgerButton = document.getElementById('burger');
    const navHref1 = document.getElementById('nav-href-1');
    const navHref2 = document.getElementById('nav-href-2');
    const navHref3 = document.getElementById('nav-href-3');
    const navHref4 = document.getElementById('nav-href-4');
    const navHref5 = document.getElementById('nav-href-5');
    const navHref6 = document.getElementById('nav-href-6');
    const navHref7 = document.getElementById('nav-href-7');
    const navHref8 = document.getElementById('nav-href-8');
    var opened = false;
    const nav = document.getElementById('nav');
    const closeText = document.getElementById('close')
    const closeLi = document.getElementById('closeLi');
    const li1 = document.getElementById('li1');
    const li2 = document.getElementById('li2');
    const li3 = document.getElementById('li3');
    const logo = document.getElementById('img-logo');
    const es = document.getElementById('tes-1');
    const en = document.getElementById('tes-2');
    const separator = document.getElementById('separator');
    const contact = document.getElementById('tes-3');
    const burger1 = document.getElementById('burger-1');
    const burger2 = document.getElementById('burger-2');
    const burger3 = document.getElementById('burger-3');
    const burger4 = document.getElementById('burger-4');
    hamburgerButton.addEventListener('click', () => {
        if(opened){
            setTimeout(hideNav,400)
            hideNavItems();
        }else{
            nav.classList.toggle('nav-height');
            showNavItems();
        }
        opened = !opened;
        separator.classList.toggle('hidden');
        li1.classList.toggle('hidden');
        li2.classList.toggle('hidden');
        li3.classList.toggle('hidden');
        closeLi.classList.toggle('hidden');
        logo.classList.toggle('img-color');
        closeText.classList.toggle('white-text');
        es.classList.toggle('white-text');
        en.classList.toggle('white-text');
        separator.classList.toggle('white-text');
        burger1.classList.toggle('white-burger');
        burger2.classList.toggle('white-burger');
        burger3.classList.toggle('white-burger');
        burger4.classList.toggle('white-burger');
        contact.classList.toggle('white-text');
        closeText.classList.toggle('tes');
        es.classList.toggle('tes');
        en.classList.toggle('tes');
        separator.classList.toggle('tes');
        contact.classList.toggle('tes');
        burger1.classList.toggle('tes-2');
        burger2.classList.toggle('tes-2');
        burger3.classList.toggle('tes-2');
        burger4.classList.toggle('tes-2');
    });

    let prevScrollPos = window.pageYOffset;

    window.addEventListener("scroll", function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        if(!opened){
            document.getElementById("nav").style.top = "-180px";
        }
    }

    prevScrollPos = currentScrollPos;
    });

    const hideNav = () =>{
        nav.classList.toggle('nav-height');
    }

    const hideNavItems = () =>{
        navHref1.classList.add('fade-slide-up');
        navHref2.classList.add('fade-slide-up');
        navHref3.classList.add('fade-slide-up');
        navHref4.classList.add('fade-slide-up');
        navHref5.classList.add('fade-slide-up');
        navHref6.classList.add('fade-slide-up');
        navHref7.classList.add('fade-slide-up');
        navHref8.classList.add('fade-slide-up');
    }
    const showNavItems = () =>{
        navHref1.classList.remove('fade-slide-up');
        navHref2.classList.remove('fade-slide-up');
        navHref3.classList.remove('fade-slide-up');
        navHref4.classList.remove('fade-slide-up');
        navHref5.classList.remove('fade-slide-up');
        navHref6.classList.remove('fade-slide-up');
        navHref7.classList.remove('fade-slide-up');
        navHref8.classList.remove('fade-slide-up');
    }

    const topNav = () =>{
        document.getElementById("nav").style.top = "0"
    }

    function scrollToTop() {
    window.scrollTo(0, 0);
    setTimeout(topNav,500);
    }
      window.onload = scrollToTop;