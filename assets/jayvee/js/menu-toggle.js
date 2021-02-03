$(function () {
	"use strict";

	$(".menu-icon").on("click",function () {
				$(".overlay-menu").toggleClass("open");
			});
			if($(".full-nav li a").hasClass("scroll")){
			 $(".full-nav li a").on("click",function () {
				$(".overlay-menu").removeClass("open");
			});
			}
	
});