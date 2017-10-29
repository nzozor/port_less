(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 500
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

    // Scroll reveal calls
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Magnific popup calls
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
    console.log($(".test").offset().top)
    console.log($("img").offset().top)
    console.log($(window).scrollTop())
    console.log($(window).height())
    $.fn.addClassDelay = function(className, delay) {
        var $addClassDelayElement = $(this),
            $addClassName = className;

        setTimeout(function() {
            $addClassDelayElement.addClass($addClassName);
        }, delay);
    };
    $(window).scroll(
        function() {
            $('.item-img img').each(function() {
                if (isScrolledIntoView($(this))) {
                    $(this).addClassDelay('addColor', 1000);
                    // $(this).addClass('addColor');
                    // $(this).delay(1000).queue('fx', function() { $(this).addClass('addColor'); });
                } else {
                    $(this).removeClass('addColor');
                }
            });
        });

    function isScrolledIntoView(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    // if ()
    // $(".item-img img").hover(
    //     function() {
    //         $(this).next().addClass("visibility-visible");
    //     },
    //     function() {
    //         $(this).next().removeClass("visibility-visible");
    //     }
    // );
    // $("img").hide();
})(jQuery); // End of use strict 

particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
    console.log('particles.js loaded - callback');
});