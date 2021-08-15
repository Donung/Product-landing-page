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
})(jQuery);