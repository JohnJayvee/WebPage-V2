$(function () {
	"use strict"; 
	
   $('.scrolling').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 75
    }, 1000);
    event.preventDefault();
  });


});