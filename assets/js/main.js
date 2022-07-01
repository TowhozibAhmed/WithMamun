(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        //--------------- Preloader Activation ---------------

        let win = $(window);
        win.on('load', function () {
            $('#preloader').delay(350).fadeOut('slow');
            $('body').delay(350).css({
                'overflow': 'visible'
            });
        })


        //--------------- Scroll To Top ---------------

        let calcScrollValue = () => {
            let scrollProgress = document.getElementById("progress_scroll");
            let progressValue = document.getElementById("progress_scroll_img");
            let pos = document.documentElement.scrollTop;
            let calcHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            let scrollValue = Math.round((pos * 100) / calcHeight);
            if (pos > 100) {
                scrollProgress.style.display = "flex";
            } else {
                scrollProgress.style.display = "none";
            }
            scrollProgress.addEventListener("click", () => {
                document.documentElement.scrollTop = 0;
            });
            scrollProgress.style.background = `conic-gradient(#39f4ed ${scrollValue}%, #0a1930 ${scrollValue}%)`;
        };

        window.onscroll = calcScrollValue;
        window.onload = calcScrollValue;


        //--------------- SWIPER TESTIMONIAL ---------------

        let swiperTestimonial = new Swiper(".testimonial__wrap", {
            spaceBetween: 24,
            loop: true,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
            },
        });


        //--------------- Scroll Reveal Animation ---------------

        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 1500,
            delay: 200,
            reset: true,
        })

        sr.reveal('.hero__left__blk')
        sr.reveal('.hero__right__blk', {
            delay: 300,
        })
        sr.reveal('.hero__social, .hero__scroll', {
            delay: 300,
            origin: 'bottom'
        })

        sr.reveal('.section__header', {
            delay: 100,
            origin: 'bottom'
        })

        sr.reveal('.about__left__blk', {
            delay: 100,
            origin: 'right'
        })
        sr.reveal('.about__box', {
            delay: 40,
            interval: 200
        })
        sr.reveal('.about__btn', {
            delay: 80,
            origin: 'bottom'
        })
        sr.reveal('.about__info', {
            delay: 80,
            origin: 'left'
        })

        sr.reveal('.skill__animate__one', {
            delay: 200,
            origin: 'bottom'
        })
        sr.reveal('.skill__animate__two', {
            delay: 200,
            origin: 'top'
        })

        sr.reveal('.work__filters span', {
            delay: 80,
            interval: 100
        })
        sr.reveal('.work__card', {
            delay: 80,
            interval: 200,
            origin: 'bottom'
        })

        sr.reveal('.testimonial__wrap', {
            delay: 100
        })

        sr.reveal('.contact__title', {
            delay: 100,
            origin: 'left'
        })
        sr.reveal('.contact__content', {
            delay: 100
        })
        sr.reveal('.contact__form', {
            delay: 100,
            origin: 'left'
        })


        //--------------- Work Isotope Filter ---------------






    }); //---document-ready-----





}(jQuery));