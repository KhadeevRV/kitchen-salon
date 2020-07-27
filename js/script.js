window.addEventListener('DOMContentLoaded', function() {
    
    'use strict'

    // Modal

    let more1 = document.querySelector('.header__feedback-btn'),
        more2 = document.querySelector('.offer__feedback-btn'),
        overlay = document.querySelector('.overlay'),
        window = document.querySelector('.main'),
        close = document.querySelector('.close_btn'),
        submitBtn=document.getElementById('submit_btn'),
        agree=document.getElementById('agree');

    agree.addEventListener('change', function () {
        if ( this.checked ) {
            submitBtn.className = 'submit_btn_active';
        } else submitBtn.className = 'submit_btn';
    })

    //agree.removeAttribute('checked')

more1.addEventListener('click',() => {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    window.style.opacity= 0.3;
});

more2.addEventListener('click',() => {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    window.style.opacity= 0.3;
});

close.addEventListener('click', function () {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    window.style.opacity= 1;
});
    //Form

    let form1 = document.querySelector('.overlay');


    form1.addEventListener('submit', function(event) {
        event.preventDefault();

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php')
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form1);
        request.send(formData);
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        window.style.opacity= 1;
        alert('Ваша форма была отправлена')
    });

    let form2 = document.querySelector('.quizz-form');


    form2.addEventListener('submit', function(event) {
        event.preventDefault();

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php')
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form2);
        request.send(formData);
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        window.style.opacity= 1;
        alert('Ваша форма была отправлена')
    });

    //Slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
        

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });
    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }   
    });

    currentSlide(1);
});