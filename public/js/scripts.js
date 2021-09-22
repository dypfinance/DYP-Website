(function ($) {
	$(document).ready(function () {

		// Scroll to Top
		jQuery('.scrolltotop').click(function () {
			jQuery('html').animate({
				'scrollTop': '0px'
			}, 400);
			return false;
		});

		jQuery(window).scroll(function () {
			var upto = jQuery(window).scrollTop();
			if (upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		// code for menu

		$(".sm-header-right").click(function () {
			$(".sm-menu-items").animate({
				"right": "0"
			});

			$("body").attr("id", "over");
		});

		$(".sm-menu-heading-right span").click(function () {
			$(".sm-menu-items").animate({
				"right": "-100%"
			});

			$("body").removeAttr("id");
		})


		// code for scroll

		$(".hero-left span").click(function () {
			var a = $(".brand-area").offset().top
			$("html").animate({
				scrollTop: a,
			})

		});



		
	});
})(jQuery);




