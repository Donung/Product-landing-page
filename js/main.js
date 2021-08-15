(function ($) {

    // Testimonial carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items:1
            },
            480: {
                items:2
            },
            768: {
                items:3
            },
            992: {
                items:4
            }
        }
    });

    // back to Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0}, 1500, 'easeInOutExpo');
        return false
    })
})(jQuery);