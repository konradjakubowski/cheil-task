$(function() {
    $('#js-burger-nav, #js-close-nav').on("click", function() {
        $('.top-wrapper, .js-dropdown').toggleClass("open");
    }); 
    $('.burger-wrapper').click( function() {
            $('.close-wrapper').toggle();
            $('.burger-wrapper').toggle();
        });
        $('.close-wrapper').click( function() {
            $('.burger-wrapper').toggle();
            $('.close-wrapper').toggle();
        });
});

/*------- Smooth Scroll -------*/

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

/*------- Swiper Slider -------*/
       var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 30000,
           speed: 1500,
           loop: true,
        autoplayDisableOnInteraction: false
    });