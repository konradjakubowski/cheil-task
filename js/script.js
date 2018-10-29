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