const $responsiveCarousel = document.querySelector(".js-carousel--responsive");

        new Glider($responsiveCarousel, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            scrollLock: true,
            dots: ".js-carousel--responsive-dots",
            arrows: {
                prev: ".js-carousel--responsive-prev",
                next: ".js-carousel--responsive-next",
            },
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });


        const $responsiveCarousel2 = document.querySelector(".js-carousel--responsive2");

        new Glider($responsiveCarousel2, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            scrollLock: true,
            dots: ".js-carousel--responsive-dots2",
            arrows: {
                prev: ".js-carousel--responsive-prev2",
                next: ".js-carousel--responsive-next2",
            },
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });

        window.smoothScroll = function (target) {
            var scrollContainer = target;
            do {
                scrollContainer = scrollContainer.parentNode;
                if (!scrollContainer) return;
                scrollContainer.scrollTop += 1;
            } while (scrollContainer.scrollTop == 0);

            var targetY = 0;
            do {
                if (target == scrollContainer) break;
                targetY += target.offsetTop;
            } while (target = target.offsetParent);

            scroll = function (c, a, b, i) {
                i++; if (i > 30) return;
                c.scrollTop = a + (b - a) / 30 * i;
                setTimeout(function () { scroll(c, a, b, i); }, 20);
            }

            scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
        }

        var position = $(window).scrollTop();

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > position) {
                console.log('scrollDown');
                $('nav').css({ "position": "unset", "zIndex": "0" });
            } else {
                console.log('scrollUp');
                $('nav').css({ "position": 'fixed', "top": '0', "zIndex": '20', "width": "100%" });
            }
            position = scroll;
        });

        $(document).ready(function () {

            var aboveHeight = 205;

            $(window).scroll(function () {
                if ($(window).scrollTop() > aboveHeight) {
                    $('navbarHeader').addClass('fixed').css('top', '0').next().css('padding-top', '60px');
                } else {
                    $('navbarHeader').removeClass('fixed').next().css('padding-top', '0');
                }
            });
        });