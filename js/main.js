// sliders
$(function () {
    $('.bannerCarousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 7000,
        animateIn: 'animate__fadeIn',
        animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
})
// :: Animation OWL Header
$('.bannerCarousel').on('translate.owl.carousel', function () {
    $('.bannerLeftContent').removeClass('animated animate__fadeInLeft').css('opacity', '0');
    $('.bannerLeftContent h5').removeClass('animated animate__fadeInUp').css('opacity', '0');
    $('.bannerLeftContent h2').removeClass('animated animate__fadeInUp').css('opacity', '0');
    $('.bannerLeftContent p').removeClass('animated animate__fadeInUp').css('opacity', '0');
    $('.bannerLeftContent a').removeClass('animated animate__fadeInUp').css('opacity', '0');
});
$('.bannerCarousel').on('translated.owl.carousel', function () {
    $('.bannerLeftContent').addClass('animated animate__fadeInLeft').css('opacity', '1');
    $('.bannerLeftContent h5').addClass('animated animate__fadeInUp').css('opacity', '1');
    $('.bannerLeftContent h2').addClass('animated animate__fadeInUp').css('opacity', '1');
    $('.bannerLeftContent p').addClass('animated animate__fadeInUp').css('opacity', '1');
    $('.bannerLeftContent a').addClass('animated animate__fadeInUp').css('opacity', '1');
});


// 
$(function () {
    $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.sectionscroll').each(function (i) {
                if ($(this).position().top <= windscroll + -80) {
                    $('.scrolling-text').eq(i).addClass('active');
                } else {
                    $('.scrolling-text').eq(i).removeClass('active');
                }
            });
        } else {
            $('.scrolling-text').removeClass('active');
            $('.scrolling-text:first').addClass('active');
        }
    }).scroll();
})

// Service Slider
$(function () {
    function initializeSwiper(selector, options) {
        return new Swiper(selector, options);
    }

    let industrySwiper = initializeSwiper('.industrySlider', {
        loop: false,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4.5,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        spaceBetween: 20,
        breakpoints: {
            1920: {
                slidesPerView: 4.5,
                spaceBetween: 20
            },
            1028: {
                slidesPerView: 3.5,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    let clientSwiper = initializeSwiper('.clientSlider', {
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 1,
            disableOnInteraction: true
        },
        speed: 2000,
        slidesPerView: 6,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 10,
        breakpoints: {
            1920: {
                slidesPerView: 6,
                spaceBetween: 10
            },
            1028: {
                slidesPerView: 6,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10
            }
        }
    });
});



// 
$(function () {
    $('.industrySlider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
})
$(function () {
    $('.ourLeadersSlider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
})
$(function () {
    $('.clients-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 4000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })
})


$(function () {
    $('.testi-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})


$(function () {
    $('.testimonialsCarousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        // slideTransition: 'linear',
        autoplayTimeout: 3000,
        // autoplaySpeed: 4000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
})

$(function () {
    const options = {
        background: {
            color: "transparent",
        },
        FullScreen: { enable: false, zIndex: 99 },
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: "repulse",
                }
            },
            modes: {
                push: {
                    quantity: 3,
                },
                repulse: {
                    distance: 100,
                },
            },
        },
        particles: {
            color: "#fff",
            links: {
                enable: true,
                opacity: 0.1,
                distance: 50,
                color: "#fff",
            },
            move: {
                enable: true,
                speed: { min: 1, max: 2 },
            },
            opacity: {
                value: { min: 0.1, max: 0.2 },
            },
            size: {
                value: { min: 1, max: 2 }
            },
        },
    }

    tsParticles.load("tsparticles", options);
})


// Menu Scrolling

$(document).ready(function () {
    var lastScrollTop = 0;

    $(window).scroll(function () {
        var st = $(this).scrollTop();

        if (st === 0) {
            // Reset classes when scroll is at the top
            $('.headerSection').removeClass('scroll-down scroll-up');
        } else if (st > lastScrollTop && st >= 100) {
            // Downscroll code
            $('.headerSection').addClass('scroll-down').removeClass('scroll-up');
        } else {
            // Upscroll code
            $('.headerSection').addClass('scroll-up').removeClass('scroll-down');
        }

        lastScrollTop = st;
    });
});


// Header Responsive
$(function () {

    var getBrowserWidth = function () {
        if (window.innerWidth < 768) {
            // Extra Small Device

            $(".hamburger").click(function () {
                $(".headerNav").slideToggle();
                $(this).toggleClass('active');
            });

            $(".hasSub").click(function () {
                var dropDownMenu = $(this).closest('li.hasSub').find(".headerSubNav");

                dropDownMenu.animate({
                    height: "toggle"
                });

                $(this).toggleClass('active');
            });



        }
    };

    getBrowserWidth();

    $(window).on('resize', function () {
        getBrowserWidth().animate('disabled', true);;

    });


    //   sub Menu Btn
    $(document).ready(function () {
        function addPlusIcon() {
            $('.headerNav ul li.hasSub').each(function () {
                $(this).append('<i class="fa-solid fa-plus"></i>');
            });
        }

        function removePlusIcon() {
            $('li.hasSub i.fa-plus').remove();
        }

        function checkScreenWidth() {
            if ($(window).width() < 768) {
                addPlusIcon();
            } else {
                removePlusIcon();
            }
        }

        // Initial check
        checkScreenWidth();

        // Check again on window resize
        $(window).resize(function () {
            checkScreenWidth();
        });
    });

})
$(".hamburger").click(function () {
    $(this).toggleClass("is-active");
});


// Header Contact
$(function () {
    $(document).ready(function () {
        function addIcon(selector, iconClass) {
            $(selector).each(function () {
                // Check screen size
                if ($(window).width() < 768) {
                    // Empty the content of the span
                    $(this).empty();
                    // Add the icon
                    $(this).html('<i class="' + iconClass + '"></i>');
                }
            });
        }

        // Call the addIcon function for '.headerContact'
        addIcon('.defaultBtn .headerContact', 'fa-solid fa-comments');

        // Call the addIcon function for '.headerCareer'
        addIcon('.defaultBtn .headerCareer', 'fa-solid fa-user-tie');

        // Re-run addIcon on window resize
        $(window).resize(function () {
            addIcon('.defaultBtn .headerContact', 'fa-solid fa-comments');
            addIcon('.defaultBtn .headerCareer', 'fa-solid fa-user-tie');
        });
    });

})


// Preloaders
$(document).ready(function () {
    $(".loaderWrapper").fadeOut(500, function () {
        // Optional: Remove the element from the DOM after fading out
        $(this).remove();
    });
});

// text animation

document.addEventListener("DOMContentLoaded", function () {
    const txts = document.querySelector(".animate-text").children,
        txtsLen = txts.length;
    let index = 0;
    const textInTimer = 3000,
        textOutTimer = 2800;

    function animateText() {
        for (let i = 0; i < txtsLen; i++) {
            txts[i].classList.remove("text-in", "text-out");
        }
        txts[index].classList.add("text-in");

        setTimeout(function () {
            txts[index].classList.add("text-out");
        }, textOutTimer)

        setTimeout(function () {

            if (index == txtsLen - 1) {
                index = 0;
            }
            else {
                index++;
            }
            animateText();
        }, textInTimer);
    }

    window.onload = animateText;
});

// Loading
$(window).on('load', function() {
    $('svg.textanimateUnderline path').css('animation-name', 'dash');
});

$(function() {
    $(window).scroll(function() {
        var theta = $(window).scrollTop() / 80 % Math.PI;
        $('.rorate1').css({ transform: 'rotate(' + theta + 'rad)' });
    });
    $(window).scroll(function() {
        var theta = $(window).scrollTop() / 600 % Math.PI;
        $('.rorate2').css({ transform: 'rotate(' + theta + 'rad)' });
    });
    // $(window).on('wheel', function(event) {
    //     var deltaY = event.originalEvent.deltaY;
    //     var translateY = deltaY > 0 ? '10px' : '-10px';
    //     $('.translateup').css({ transform: 'translateY(' + translateY + ')' });
    // });
    // $(window).scroll(function() {
    //     var theta = $(window).scrollTop() / 10 % Math.PI;
    //     $('.scale1').css({ transform: 'scaleX(' + theta + ') scaleX(0.35)' });
    // });
})

// parrallux Img
var $images = $('.translateup');
var window_h = $(window).height();

$(window).scroll(function () {
    var windowScrollTop = $(window).scrollTop();

    if (windowScrollTop == 0) {
        TweenLite.to($images, 1.2, {
            yPercent: 0,
            ease: Power1.easeOut,
            overwrite: 0
        });
    }
    else {
        $images.each(function () {
            var elementOffsetTop = $(this).offset().top,
                element_h = $(this).height(),
                velocity = $(this).data('velocity');

            if (windowScrollTop + window_h > elementOffsetTop && windowScrollTop < elementOffsetTop + element_h) {
                //if in view:

                TweenLite.to($(this), 1.2, {
                    yPercent: (windowScrollTop + window_h - elementOffsetTop) / window_h * velocity,
                    ease: Power1.easeOut,
                    overwrite: 0
                });
            }
        });
    }
});

$(document).ready(function() {
    // Accordion image change
    $('.accordion-item .accordion-button').click(function(){
        var accordionId = $(this).closest('.accordion-item').index() + 1;
        $('.accordion-img').hide();
        $('.accordion-img[data-accordion="' + accordionId + '"]').show();
    });
});


// Goto Top Button
$(function () {

    // Top Button
    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
})


// Translate Language

$(function () {
    if ($(".dropdown").length) {
        $(document).on("click", ".dropdown-menu .dropdown-item", function (e) {
            e.preventDefault();
            if (!$(this).hasClass("active")) {
                var swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                        confirmButton: "btn btn-primary",
                        cancelButton: "btn btn-danger me-3",
                    },
                    buttonsStyling: false,
                });
                swalWithBootstrapButtons
                    .fire({
                        title: "Are you sure?",
                        text: "Do you really want to change your current language!",
                        icon: "warning",
                        confirmButtonText: "<i class='fas fa-check-circle me-1'></i> Yes, I am!",
                        cancelButtonText: "<i class='fas fa-times-circle me-1'></i> No, I'm Not",
                        showCancelButton: true,
                        reverseButtons: true,
                        focusConfirm: true,
                    })
                    .then((result) => {
                        if (result.isConfirmed) {
                            if (!$(this).hasClass("active")) {
                                $(".dropdown-menu .dropdown-item").removeClass("active");
                                $(this).addClass("active");
                                $(this)
                                    .closest(".dropdown")
                                    .find(".btn")
                                    .html("<span class='flag-icon flag-icon-us me-1'></span>" + $(this).text());
                            }
                            Swal.fire({
                                icon: "success",
                                title: "Amazing!",
                                text: "Your current language has been changed successfully.",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    });
            }
        });
    }
});
