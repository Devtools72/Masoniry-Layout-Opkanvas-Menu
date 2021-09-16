$(document).ready(function($){
	$(".portfolio-list").masonry({

	});

	$(".single-portfolio-item").hover(function(){
		$(".single-portfolio-item .portfolio-hover h2,p").removeClass("animate__animated animate__slideInDown");
		$(this).find(".portfolio-hover h2,p").addClass("animate__animated animate__slideInDown");

	});

	// Offcanvas menu
	$(".menu-trigger").on('click', function(){
		$(".offcanvas-menu").addClass("active");
		$(".offcanvas-menu-overlay").addClass("active");

	});

	$(".menu-close i, .offcanvas-menu-overlay").on('click', function(){
		$(".offcanvas-menu").removeClass("active");
		$(".offcanvas-menu-overlay").removeClass("active");

	});
	$(".header-area").headroom();



});