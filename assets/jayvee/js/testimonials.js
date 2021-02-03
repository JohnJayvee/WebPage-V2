$(function () {
	"use strict";
 
 $(document).ready(function(){
			$("#testimonial-slider").owlCarousel({
			items:1,
        	itemsDesktop:[1000,1],
        	itemsDesktopSmall:[990,1],
        	itemsTablet:[768,2],
        	itemsMobile:[650,1],
        	pagination:true,
        	navigation:false,
        	autoPlay:true
    		});

   		 $("#testimonial-slider1").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        autoplay:true
    });
});

});