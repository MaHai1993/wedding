;(function () {

	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');

	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:true
		});
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};

    var loadingPage = function () {
        // document.onreadystatechange = function () {
        //     if(document.readyState = 'complete') {
        //         $(".fh5co-loader").fadeOut("slow");
        //     }
        // }
        if (document.readyState === 'complete') {
            $(".fh5co-loader").fadeOut("slow");
        }
    }




	// Loading page
	var loaderPage = function() {
        // add listener to disable scroll
        // window.addEventListener('scroll', noScroll);
		$(".fh5co-loader").delay(3000).fadeOut("slow");

        // Remove listener to re-enable scroll
        // window.removeEventListener('scroll', noScroll);
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

    function noScroll() {
        window.scrollTo(0, 0);
    }

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};
	//
	// var fancyBox = function () {
     //    $("a.galleryImage").fancybox({
     //        'transitionIn'	:	'elastic',
     //        'transitionOut'	:	'elastic',
     //        'speedIn'		:	600,
     //        'speedOut'		:	200,
     //        'overlayShow'	:	false
     //    });
	// }


    // $(document).ready(function() {
    //
    //     // /* This is basic - uses default settings */
    //     //
    //     // $("a#single_image").fancybox();
    //     //
    //     // /* Using custom settings */
    //     //
    //     // $("a#inline").fancybox({
    //     //     'hideOnContentClick': true
    //     // });
    //
    //     /* Apply fancybox to multiple items */
    //
    //     $("a.galleryImage").fancybox({
    //         'transitionIn'	:	'elastic',
    //         'transitionOut'	:	'elastic',
    //         'speedIn'		:	600,
    //         'speedOut'		:	200,
    //         'overlayShow'	:	false
    //     });
    //
    // });


	$(function(){
		mobileMenuOutsideClick();
		parallax();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		goToTop();
		counter();
        counterWayPoint();
        // noScroll();
        // loaderPage();
        // loadingPage();

        var i = 0, howManyTimes = 100;
        function f() {
            i++;

            if( i < howManyTimes && document.readyState != 'complete') {
                setTimeout( f, 1000 );
            } else {
                if (document.readyState === 'complete') {
                    $(".fh5co-loader").fadeOut("slow");
                    window.removeEventListener('scroll', noScroll);
                    i = 100;
                }
			}
        }
        // add listener to disable scroll
        window.addEventListener('scroll', noScroll);
        f();
    });



}());