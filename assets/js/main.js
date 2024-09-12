(function ($) {
    'use strict';
    // ===== Brand Slider One
    function brandSlider() {
        const slider = $('.brand-slider-one-active');

        slider.slick({
            infinite: true,
            dots: true,
            arrows: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    }

    function testimonialActiveOne() {
        const slider = $('#testimonialActiveOne');

        slider.slick({
            infinite: true,
            dots: true,
            arrows: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: false,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    // ===== Testimonials Slider Eight
    function testimonialActiveEight() {
        const slider = $('.customer-review-wrap');
        slider.slick({
            infinite: true,
            dots: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
        });
    }

    // ==== Sticky Header
    function stickyHeader() {
        const scroll_top = $(window).scrollTop(),
            siteHeader = $('.template-header');

        if (siteHeader.hasClass('sticky-header')) {
            if (scroll_top < 110) {
                siteHeader.removeClass('sticky-on');
            } else {
                siteHeader.addClass('sticky-on');
            }
        }
    }

    function deferBG() {
        var imgDefer = document.querySelectorAll('.defer-bg[data-src]');
        var style = "background-image: url({url})";
        for (var i = 0; i < imgDefer.length; i++) {
            imgDefer[i].setAttribute('style', style.replace("{url}", imgDefer[i].getAttribute('data-src')));
        }
    }

    // ==== Video Popup
    function videoPopup() {
        $('.popup-video').each(function () {
            $(this).magnificPopup({
                type: 'iframe',
            });
        });
    }

    /*---------------------
    === Document Ready  ===
    ----------------------*/
    $(document).ready(function () {
        brandSlider();
        testimonialActiveOne();
        testimonialActiveEight();
        videoPopup();
        deferBG()
    });

    /*---------------------
    === Window Scroll  ===
    ----------------------*/
    $(window).on('scroll', function () {
        stickyHeader();
    });

    /*------------------
    === Window Load  ===
    --------------------*/
    $(window).on('load', function () {
        // wow Init
        new WOW().init();
    });

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages = document.querySelectorAll("img.lazy");
    var lazyloadThrottleTimeout;

    function lazyload() {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function (img) {
                if (img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
            });
            if (lazyloadImages.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});