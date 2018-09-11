$('.swiper-slide,.swiper-container').css({
    height: $(window).height()
});

$(window).on('resize', function() {
    $('.swiper-slide,.swiper-container').css({
        height: $(window).height()
    });
});


var mySwiper = new Swiper('.swiper-container', {
    initialSlide: 0,
    setWrapperSize: true,
    direction: "horizontal",
    speed: 1000,
    longSwipesRatio: 0.2,
    grabCursor: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    mousewheelControl: true,
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    lazyLoadingOnTransitionStart: true,
    onInit: function(swiper) {
        setTimeout(function() {
            $("#loading").remove();
            $(".swiper-container").css({ "opacity": "1" });
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        }, 1000);
    },
    onSlideChangeEnd: function(swiper) {
        swiperAnimate(swiper);
    },
    onTransitionEnd: function(swiper) {
        swiperAnimate(swiper);
    }
});

$(document).ready(function() {
    document.addEventListener("touchstart", function() {
        document.getElementById('bgMusic').play();
    })
})

var pagination = document.querySelector('.swiper-pagination');

var slide2 = document.querySelector('.swiper-slide2');
var slide2_sign = slide2.querySelector('.sign');
var slide2_page = slide2.querySelector('.page');
var slide2_page_joinBtn = slide2.querySelector('.slide2-join');
var slide2_page_backBtn = slide2.querySelector('.slide2-back');
slide2_page_joinBtn.addEventListener("touchmove", function() {
    slide2_sign.classList.add('sign-down');
    slide2_page.classList.add('page-down');
    pagination.classList.add('pagination-hide');
})
slide2_page_backBtn.addEventListener("touchmove", function() {
    slide2_sign.classList.remove('sign-down');
    slide2_page.classList.remove('page-down');
    pagination.classList.remove('pagination-hide');
})

var slide3 = document.querySelector('.swiper-slide3');
var slide3_sign = slide3.querySelector('.sign');
var slide3_page = slide3.querySelector('.page');
var slide3_page_joinBtn = slide3.querySelector('.slide3-join');
var slide3_page_backBtn = slide3.querySelector('.slide3-back');
slide3_page_backBtn.addEventListener("touchmove", function() {
    slide3_sign.classList.remove('sign-down');
    slide3_page.classList.remove('page-down');
    pagination.classList.remove('pagination-hide');
})
slide3_page_joinBtn.addEventListener("touchmove", function() {
    slide3_sign.classList.add('sign-down');
    slide3_page.classList.add('page-down');
    pagination.classList.add('pagination-hide');
})

var slide4 = document.querySelector('.swiper-slide4');
var slide4_sign = slide4.querySelector('.sign');
var slide4_page = slide4.querySelector('.page');
var slide4_page_joinBtn = slide4.querySelector('.slide4-join');
var slide4_page_backBtn = slide4.querySelector('.slide4-back');
slide4_page_backBtn.addEventListener("touchmove", function() {
    slide4_sign.classList.remove('sign-down');
    slide4_page.classList.remove('page-down');
    pagination.classList.remove('pagination-hide');
})
slide4_page_joinBtn.addEventListener("touchmove", function() {
    slide4_sign.classList.add('sign-down');
    slide4_page.classList.add('page-down');
    pagination.classList.add('pagination-hide');
})

var slide5 = document.querySelector('.swiper-slide5');
var slide5_sign = slide5.querySelector('.sign');
var slide5_page = slide5.querySelector('.page');
var slide5_page_joinBtn = slide5.querySelector('.slide5-join');
var slide5_page_backBtn = slide5.querySelector('.slide5-back');
slide5_page_backBtn.addEventListener("touchmove", function() {
    slide5_sign.classList.remove('sign-down');
    slide5_page.classList.remove('page-down');
    pagination.classList.remove('pagination-hide');
})
slide5_page_joinBtn.addEventListener("touchmove", function() {
    slide5_sign.classList.add('sign-down');
    slide5_page.classList.add('page-down');
    pagination.classList.add('pagination-hide');
})