$(document).ready(function() {

$(".modal").css({
"transform": "translateY(' + (-100 * count) + '%)"

});

	$('.text-center').on('click', function() {

		$(".overlay, .modal").css({
			"opacity": "1",
			"display": "block",
			"transform": "none",
			transition: "10000s"

		});



	});

	$('.close').on('click', function() {
		$(".overlay, .modal").css({
			"display": "none",
			"opacity": "0"
		});
		$(".modal").css({
			"transform": "translateY(' + (-100 * count) + '%)"
});
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


