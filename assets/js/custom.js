/*global jQuery */
(function($) {

  /*---------------- LOADING SCREEEN ------------------*/
  $(window).on('load', function () {
    $("body").removeClass("hidden");
    $(".page_loader").fadeOut("slow")
});
"use strict";  
	
	/*---------------- CHANGE HEADER STYLE ------------------*/
    $(document).resize(function () {
        headerFixed();
      });
      $(document).ready(function () {
        headerFixed();
      });
      $(document).on('scroll', function () {
        headerFixed();
      });
      function headerFixed() {
        if ($(window).scrollTop() >= 40) {
          $('header .navigation-wrap').addClass('fixed-menu');
        } else {
          $('header .navigation-wrap').removeClass('fixed-menu');
        }
        if ($(window).scrollTop() >= 400) {
          $('header .navigation-wrap').addClass('active');
        } else {
          $('header .navigation-wrap').removeClass('active');
        }
      }
    /*---------------- NAVBAR ------------------*/
    if (screen.width <= parseInt(767)) {
        $('.menu_btn').on('click', function(e) {
            $('.navbar-collapse').toggleClass('in');
            $('.navbar-collapse').toggleClass('slideInLeft');

            $('.icon-bar').toggleClass('cross');
        });
    }

    $(window).on('scroll', function(e) {
        var scroll = $(window).scrollTop();
        if (scroll > parseInt(100)) {
            $(".header-lower").css("background", "rgba(9, 9, 9, 0.90)");
        } else {
            $(".header-lower").css("background", "transparent");
        }
    })

   
    /*---------------- SLIDER ------------------*/
    var bannerslide = $('.banner-slide');
    bannerslide.owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000, // 1000 = 1 second
        interval: 4000
    });

    bannerslide.on('translate.owl.carousel', function() {
        $('.slide-content h1').removeClass('fadeInLeft animated').hide();
        $('.slide-content img').removeClass('fadeInRight animated').hide();
        $('.slide-content p').removeClass('zoomIn animated').hide();
        $('.slide-content a.theme-btn').removeClass('fadeInLeft animated').hide();
        $('.slide-content a.theme-btn-alt').removeClass('fadeInRight animated').hide();
    });

    bannerslide.on('translated.owl.carousel', function() {
        $('.owl-item.active .slide-content h1').addClass('fadeInLeft animated').show();
        $('.owl-item.active .slide-content img').addClass('fadeInRight animated').show();
        $('.owl-item.active .slide-content p').addClass('zoomIn animated').show();
        $('.owl-item.active .slide-content a.theme-btn').addClass('fadeInLeft animated').show();
        $('.owl-item.active .slide-content a.theme-btn-alt').addClass('fadeInRight animated').show();
    });

    var dot = $('.banner-slide .owl-dot');
    dot.each(function() {
        var index = $(this).index();
        $(this).text(index + 1);
    });
   
    /*---------------- BARND_SLDIIER ------------------*/
    var brandCaro = $('.our-barnd-caro');
    brandCaro.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000, // 1000 = 1 second
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    });
    /*---------------- COURSE SLIER ------------------*/

    var owl = $('#slider1');
    owl.owlCarousel({
        loop: true,
        margin: 20,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        dots: true,

        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
    /*---------------- TRAINER SLIDER ------------------*/
    var owl = $('#slider3');
    owl.owlCarousel({
        loop: true,
        margin: 20,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        dots: true,

        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
   
    /*---------------- TESTIMONIALS SLIDER ------------------*/
    var owl = $('#slider4');
    owl.owlCarousel({
        loop: true,
        margin: 20,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        dots: true,

        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
  
})(window.jQuery);

/*---------------Contact_Form--------------*/

$('#contactForm').submit(function() {
      var form = $(this);
      var formData = $(this).serialize();
     
      $.post('../mail.php', formData, function(data) {
        //form.find('.send_mes').val('');
        form.append('<div class="success-msg" style="color:#fff; font-weight:bold;">Mail Sent.</div>');
      }).fail(function() {
        //form.find('.required-field').val('');
        form.append('<div class="error-msg">Error occurred.</div>');
      });

      return false;

  });