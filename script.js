$(document).ready(function() {
    $('#carouselExampleIndicators').carousel({
        interval: 3000,
        pause: false
    });

    // Smooth scroll for links with the class 'scroll-to'
    $('a.scroll-to').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Hide preloader when page is fully loaded
    $(window).on('load', function() {
        $('.loader-logo img').css('animation', 'expandCollapse 1s forwards');
        setTimeout(function() {
            $('#preloader').fadeOut('slow', function() {
                $(this).remove(); // optional if you want to remove the preloader completely
            });
        }, 1000);
    });
});
