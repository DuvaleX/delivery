$(document).ready(function(){
    $('.carousel__inner').slick({
      centerMode: true,
      slidesToShow: 3,
      centerPadding: '60px',
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
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
    
});