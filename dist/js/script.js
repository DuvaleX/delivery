$(document).ready(function(){
    $('.carousel__inner').slick({
      centerMode: true,
      slidesToShow: 3,
      centerPadding: '60px',
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            centerMode: false
          } 
        }
      ]
    });

                    // Scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 680) {
        $('.pageup').fadeIn();
      } else {
         $('.pageup').fadeOut();
      }
    });

    $("a[href^='#']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

                    // Modal 

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation').fadeOut('slow');
    });

                // exit on Esc

    $(document).on('keydown', function(event) {
      if (event.keyCode == 27) {
        $('.overlay, #consultation').fadeOut('slow');
      }
    });

              // phone mask

    $('input[name=phone]').mask("+7 (999) 999-9999");
    
});

            // Hamburger
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__list'),
  menuItem = document.querySelectorAll('.header_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('header__list_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('header__list_active');
      });
  });
});