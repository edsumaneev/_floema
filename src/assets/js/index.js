require('bootstrap');
require('slick-carousel');

// hamburger
$('.hamburger').on('click', function (event) {
  event.preventDefault();
  $(this).toggleClass('active');
  $('.nav').toggleClass('active');
  $('body').toggleClass('is-modal');
  $('#overlay').toggleClass('active');
});

$('#overlay, .nav__item').on('click', function (event) {
  if ($(window).innerWidth() < 992) {
    $('.hamburger').removeClass('active');
    $('.nav').removeClass('active');
    $('body').removeClass('is-modal');
    $('#overlay').removeClass('active');
  }
});

$(document).keydown(function (eveent) {
  if (event.keyCode == 27) {
    $('.hamburger').removeClass('active');
    $('.nav').removeClass('active');
    $('body').removeClass('is-modal');
    $('#overlay').removeClass('active');
  }
});

// slick slider
$(".slider").slick({
  slidesToShow: 3,
  infinite: true,
  autoplay: false,
  touchThreshold: 100,
  dots: false,
  prevArrow: $(".slick-prev"),
  nextArrow: $(".slick-next"),
  responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 737,
      settings: {
        slidesToShow: 1,
        prevArrow: false,
        nextArrow: false,
        dots: true
      }
    }
  ]
});

// скролл к якорю с учётом высоты header
$(document).ready(function () {
  $("a").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top - $('.header').height();
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 400);
    return false;
  });
});