var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    spaceBetween: 30,
    breakpoints: {
        // when window width is >= 320px
        600: {
            slidesPerView: 1,
            spaceBetween: 5
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        // when window width is >= 480px
        991: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        // when window width is >= 640px
        1080: {
            slidesPerView: 4,
            spaceBetween: 15
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});