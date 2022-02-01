
			$('.brand-slider').owlCarousel({
            loop: true,
            margin: 0,
            center: false,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            responsiveClass: true,
            responsiveRefreshRate: true,
            responsive: {
               0: {
                  items: 4
               },
               576: {
                  items: 5
               },
               768: {
                  items: 3
               },
               960: {
                  items: 6
               },
               1200: {
                  items: 9
               },
               1920: {
                  items: 9
               }
            }
         });
   
         var owl = $('.owl-carousel');
         owl.owlCarousel();
         // Go to the next item
         $('.brand-slider-arrow .right span').click(function () {
            owl.trigger('next.owl.carousel');
         })
         // Go to the previous item
         $('.brand-slider-arrow .left span').click(function () {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [300]);
         });