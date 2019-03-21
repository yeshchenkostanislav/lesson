$(document).ready(function() {

$('.text-center').on('click', function() {

		$('.overlay').fadeIn("slow");
		$('.modal').slideDown("slow");
		
	});	

	$('.main_nav nav ul:nth-child(1)').on('click', function() {

		$('.overlay').fadeIn("slow");
		$('.modal').slideDown("slow");

	});


	$('.close').on('click', function() {
		$('.overlay').fadeOut("slow");
		$('.modal').slideUp("slow");

	});

	// $('.text-center').on('click', function() {

	// 	$('.overlay').animate({
	// 		opacity: "toggle",
 //   height: "toggle"
	// 	}, 1000);
	// 	$('.modal').slideDown("slow");
	// });	

	// $('.main_nav nav ul:nth-child(1)').on('click', function() {

	// 	$('.overlay').animate({
	// 		opacity: "toggle",
 //   height: "toggle"
	// 	}, 1000);
	// 	$('.modal').slideDown("slow");
	// });


	// $('.close').on('click', function() {
	// 			$('.overlay').animate({
	// 		opacity: "toggle",
 //   height: "toggle"
	// 	}, 1000);
	// 	$('.modal').slideUp("slow");

	// });

	});


