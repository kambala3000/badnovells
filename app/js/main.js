"use strict";

(function () {

    $(document).ready(function () {
        if ($('html').attr('lang') === 'en') {
            $('.js-lang-item:first-child').removeClass('main-header__lang-item--transparent');
            $('.js-lang-item:last-child').addClass('main-header__lang-item--transparent');
        }
        $('.js-top-slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            initialSlide: 0,
            arrows: false,
            dots: false,
            fade: true,
            speed: 1800,
            pauseOnHover: false,
            swipe: false
        });
    });

    $('.js-up').click(function () {
        $(window).scrollTo(0);
    });

    $('.js-watch-proj').click(function () {
        $(window).scrollTo('.js-proj-arch', 500, {
            axis: 'y'
        });
    });
})();