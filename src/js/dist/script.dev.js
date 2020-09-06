"use strict";

$(document).ready(function () {
  $('.carousel__inner').slick({
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '60px',
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
  });
});