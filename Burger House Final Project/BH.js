// menu show and hide
var navLink = document.getElementById('navLink');
function showmenu(){
    navLink.style.right = "0";
}
function hidemenu(){
    navLink.style.right = "-200px"
}

// for smooth scroll
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i=0; i<reveals.length; i++)
    {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint)
        {
            reveals[i].classList.add('active');
        }
        else
        {
            reveals[i].classList.remove('active');
        }
    }
}

// Swiper slide animation and Autoplay
const swiper = new Swiper('.swiper-slider', {
    grabCursor: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlide: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2 
        },
        768: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 4 
        },
        1150: {
            slidesPerView: 5 
        },
    }
});