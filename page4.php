<?php
$campo = "Contact Us";
include "nav2.php"

?>

<section data-bs-version="5.1" class="header4 cid-tLp8n5ZlJ8 mbr-fullscreen mbr-parallax-background" id="header4-1m">
    <div class="mbr-overlay"></div>
    <div class="container">
        <div class="row">
            <div class="content-wrap">
                <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-3 display-1" data-section="nav" data-value="contact">Contact us</h1>

                <p class="mbr-fonts-style mbr-text mbr-white mb-3 display-7" data-section="page4" data-value="descrip">
                    What sets us apart is our unwavering commitment to personalized exclusive service.</p>

            </div>
        </div>
    </div>
</section>

<section>
    <div class="contact-container">
        <!-- <div class="arrows">
            <div class="arrow prev" style="opacity: 1; transform: translate3d(0px, 0px, 0px);">
              <span class="svg svg-arrow-left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 26" enable-background="new 0 0 30 26"><path d="M13 26c-.3 0-.5-.1-.7-.3l-12-12c-.4-.4-.4-1 0-1.4l12-12c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-11.3 11.3 11.3 11.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"/><path class="arrow__line" d="M29.9 13.1h-28.4"/></svg>
              </span>
            </div>
            <div class="arrow next" style="opacity: 1; transform: translate3d(0px, 0px, 0px);">
              <span class="svg svg-arrow-right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 26" enable-background="new 0 0 30 26"><path d="M16.9 0c.3 0 .5.1.7.3l12 12c.4.4.4 1 0 1.4l-12 12c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l11.3-11.3-11.3-11.3c-.4-.4-.4-1 0-1.4.2-.2.5-.3.7-.3z"/><path class="arrow__line" d="M0 12.9h28.5"/></svg>
              </span>
            </div>
          </div> -->
        <h5 data-section="page4" data-value="descrip2" class="roboto-regular" style="line-height: 1.2;">
            If you have any questions or need any general <br> 
            information, please complete this form to <br> 
            request the information you need. We will be <br> 
            pleased to help you.
        </h5>
        <div id="mensajeC"></div>
            <form id="form_enviar" method="post" action="mail.php">
            <div class="input-container">
                <input type="text" id="name" name="name" required="">
                <div class="d-flex justify-content-end">
                    <label for="input" class="label" data-section="page4" data-value="name">Your Name</label>
                    <span class="mandatory">*</span>
                </div>
                <div class="underline"></div>
            </div>
            <div class="input-container">
                <input type="text" id="email" name="email" required="">
                <div class="d-flex justify-content-end">
                    <label for="input" class="label" data-section="page4" data-value="email">Your Email</label>
                    <span class="mandatory">*</span>
                </div>
                <div class="underline"></div>
            </div>
            <div class="input-container">
                <input type="text" id="phone" name="phone" required="">
                <label for="input" class="label" data-section="page4" data-value="phone">Phone</label>
                <div class="underline"></div>
            </div>


            <div class="input-container">
                <div class="underline-about"></div>
                <div class="select-menu fade-slide-down">
                    <div id="about" class="select-btn d-flex justify-content-between">
                        <span class="sBtn-text" value="about"  data-section="page4" data-value="about">About</span>
                        <div id="aboutIcon" class="plus dropdown-about">+</div>
                    </div>
                    <ul class="options" >
                        <li class="option">
                            <i class="bx bxl-github" style="color: #171515;"><input style="all: unset;" id="Country Day" type="checkbox" value="Country Day" name='list_in[]'></i>
                            <span class="option-text" name="uno" data-section="page4" data-value="select1"><label for="Country Day">Country Day</label></span>
                        </li>
                        <li class="option" >
                            <i class="bx bxl-instagram-alt" style="color: #E1306C;"><input style="all: unset;" id="Country Day + Overnight" type="checkbox" value="Country Day + Overnight" name='list_in[]'></i>
                            <span class="option-text" name="dos"  data-section="page4" data-value="select2"><label for="Country Day + Overnight">Country Day + Overnight</label></span>
                        </li>
                        <li class="option" >
                            <i class="bx bxl-linkedin-square" style="color: #0E76A8;"><input style="all: unset;" id="Half Day"  type="checkbox" value="Half Day" name='list_in[]'></i>
                            <span class="option-text" data-section="page4" data-value="select3"><label for="Half Day">Half Day</label></span>
                        </li>
                        
                        <li class="option">
                            <i class="bx bxl-linkedin-square" style="color: #0E76A8;"><input style="all: unset;" type="checkbox" id="Sailing" value="Sailing" name='list_in[]'></i>
                            <span class="option-text"   data-section="page4" data-value="select4"><label for="Sailing">Sailing</label></span>
                        </li>
                        <li class="option">
                            <i class="bx bxl-linkedin-square" style="color: #0E76A8;"><input style="all: unset;" type="checkbox" id="Motorcycle Road Trip" value="Motorcycle Road Trip" name='list_in[]'></i>
                            <span class="option-text"   data-section="page4" data-value="select5"><label for="Motorcycle Road Trip">Motorcycle Road Trip</label></span>
                        </li>
                        <li class="option"> 
                            <i class="bx bxl-linkedin-square" style="color: #0E76A8;"><input style="all: unset;" type="checkbox" id="Golf Outing" value="Golf Outing" name='list_in[]'></i>
                            <span class="option-text"   data-section="page4" data-value="select6"><label for="Golf Outing">Golf Outing</label></span>
                        </li>
                    </ul>
                </div> 
            </div> 

            <!--- SELEC EDICION -->




            
            <div class="input-container">
                <div class="d-flex justify-content-end">
                    <h6 class="label" data-section="page4" data-value="interests">Other interests</h6>
                    <span class="mandatory-2">*</span>
                </div>
                <div class="check-container row">
                    <div class="d-flex flex-column col-6 col-sm-3 pe-0">
                        <div class="checkbox-container">
                            <input class="check-input custom-checkbox" id="wine" type="checkbox" value="Wine" name='check_list[]'>
                            <label class="check-label checkbox-label" for="wine"></label> 
                            <span class="label-text" data-section="page4" data-value="check1">Wine</span>
                        </div> 
                        <div class="checkbox-container">      
                            <input class="check-input custom-checkbox" id="motorcycle" type="checkbox" value="Motorcycle" name='check_list[]'>
                            <label class="check-label checkbox-label" for="motorcycle"></label>
                            <span class="label-text" data-section="page4" data-value="check2">Motorcycle</span>
                        </div>
                        <div class="checkbox-container">
                            <input class="check-input custom-checkbox" id="sailing" type="checkbox" value="Sailing" name='check_list[]'>
                            <label class="check-label checkbox-label" for="sailing"></label>
                            <span class="label-text" data-section="page4" data-value="check3">Sailing</span>
                        </div> 
                    </div>
                     <div class="d-flex flex-column col-6 col-sm-3 pe-0 ps-0">
                        <div class="checkbox-container">
                            <input class="check-input custom-checkbox" id="food" type="checkbox" value="Food" name='check_list[]'>
                            <label class="check-label checkbox-label" for="food"></label>
                            <span class="label-text" data-section="page4" data-value="check4">Food</span>
                        </div>
                        <div class="checkbox-container">
                            <input class="check-input custom-checkbox" id="horses" type="checkbox" value="Horses" name='check_list[]'>
                            <label class="check-label checkbox-label" for="horses"></label>
                            <span class="label-text" data-section="page4" data-value="check5">Horses</span>
                        </div>
                        <div class="checkbox-container">
                            <input class="check-input custom-checkbox" id="golf" type="checkbox" value="Golf" name='check_list[]'>
                            <label class="check-label checkbox-label" for="golf"></label>
                            <span class="label-text" data-section="page4" data-value="check6">Golf</span>
                        </div>
                    </div>
                    <div class="d-flex flex-column col-6 col-sm-3 pe-0 ps-sm-0">
                        <div class="checkbox-container">
                            <input class="check-input custom-checkbox" id="adventure" type="checkbox" value="Ranch" name='check_list[]'>
                            <label class="check-label checkbox-label" for="adventure"></label>
                            <span class="label-text" data-section="page4" data-value="check9">Adventure</span>
                        </div>
                        <div class="checkbox-container">
                            <input class="check-input custom-checkbox" id="ranch" type="checkbox" value="Ranch" name='check_list[]'>
                            <label class="check-label checkbox-label" for="ranch"></label>
                            <span class="label-text" data-section="page4" data-value="check7">Ranch</span>
                        </div>
                        <div class="checkbox-container">
                            <input class="check-input custom-checkbox" id="4x4" type="checkbox" value="4x4" name='check_list[]'>
                            <label class="check-label checkbox-label" for="4x4"></label>
                            <span class="label-text">4x4</span>
                        </div>
                    </div>
                    <div class="d-flex flex-column col-6 col-sm-3 pe-0 ps-0">
                        <div class="checkbox-container">
                            <input class="check-input custom-checkbox" id="relaxation" type="checkbox" value="Relaxation" name='check_list[]'>
                            <label class="check-label checkbox-label" for="relaxation"></label>
                            <span class="label-text" data-section="page4" data-value="check8">Relaxation</span>
                        </div>
                    </div>
                </div>
            </div>

            <div id="dropdown" class="input-container date mt-5">
                <div class="d-flex justify-content-end">
                    <h6 class="label" data-section="page4" data-value="estimated">Estimated date for your journey</h6>
                    <div id="dropdownIcon" class="plus dropdown">+</div>
                </div>
                <div class="underline-text"></div>
            </div>
            <div id="dateHide" class="hidden d-flex date-margin">
                <input maxlength="2" class="day-input" type="text" name="fechainD" id="day" onkeyup="saltarAlSiguiente(this, 'month')" placeholder="DD">
                <h6 class="slash">/</h6>
                <input maxlength="2" class="date-input" type="text" name="fechainM" id="month" onkeyup="saltarAlSiguiente(this, 'year')" placeholder="MM">
                <h6 class="slash">/</h6>
                <input maxlength="2" class="year-input" type="text" name="fechainA" id="year" onkeyup="saltarAlSiguiente(this, 'day2')" placeholder="YY">
                <h6 class="to">to</h6>
                <input maxlength="2" class="day-input" type="text" name="fechasalD" id="day2" onkeyup="saltarAlSiguiente(this, 'month2')" placeholder="DD">
                <h6 class="slash">/</h6>
                <input maxlength="2" class="date-input" type="text" name="fechasalM" id="month2" onkeyup="saltarAlSiguiente(this, 'year2')" placeholder="MM">
                <h6 class="slash">/</h6>
                <input maxlength="2" class="year-input" type="text" name="fechasalA" id="year2" placeholder="YY">
            </div>

            <div class="input-container message">
                <input type="text" id="input" required="" name="message">
                <div class="d-flex justify-content-end">
                    <label for="input" class="label" data-section="page4" data-value="message">Message</label>
                    <span class="mandatory">*</span>
                </div>
                <div class="underline"></div>
            </div>

            <button type="submit" class="btn btn-dark btn-lg submit roboto" data-section="page4" data-value="submit">Submit</button>

            <div class="input-container">
                <div class="divider-medium"></div>
            </div>

            <div class="row">
                <div class="d-flex flex-column col-6">
                    <h5 class="contact-footer-title roboto-bold" data-section="page4" data-value="general">GENERAL INQUIRES</h5>
                    <h6 class="fw-bold mt-2 roboto-bold">Email</h6>
                    <a href="MAILTO:contact@vivacsdelplata.com" target="_blank"><p class="mb-2 roboto-regular">contact@vivacsdelplata.com</p></a>
                    <h6 class="fw-bold roboto-bold" data-section="page4" data-value="phone">Phone</h6>
                    <a href="tel:2616316497" target="_blank"><p class="phone-number roboto-regular">+54 9 (261) 631 6497</p></a>
                </div>
                <div class="d-flex flex-column col-6">
                    <h5 class="contact-footer-title roboto-bold" data-section="page4" data-value="social">SOCIAL MEDIA</h5>
                    <a class="fw-bold mt-2 roboto-regular" href="https://instagram.com/vivacsdelplata?igshid= MZRLODBINWFIZA==" target="_blank">Instagram</a>
                    <a class="fw-bold mt-2 roboto-regular" href="https://www.facebook.com/profile.php?id=100070294090599&mibextid=eBUYbo" target="_blank">Facebook</a>
                    <a class="fw-bold mt-2 roboto-regular" href="https://api.whatsapp.com/send/?phone=2616316497&text&type=phone_number&app_absent=0" target="_blank">Tripadvisor</a>
                </div>
            </div>
        </form>
    </div>
</section>
<?php

include "footer2.php"

?>