$(function(){
    'use strict';
    $('a[href^="#"]').click(function(){
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop:$(target).offset().top
        },800);
    });
    
    var offset = $('nav').offset();
    
    $(window).scroll(function(){
        if($(window).scrollTop() > offset.top) {
            $('#bottom_header').addClass('fixedNav');
        } else {
            $('#bottom_header').removeClass('fixedNav');
        }
    });
    
    if( window.innerWidth > 1024) {
        $('#slide').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    } else {
            $('#slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }
    

});