$(function(){
    'use strict';
    
    //scroll to nav
    $('a[href^="#"]').click(function(){
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop:$(target).offset().top
        },800);
    });
    
    var offset = $('nav').offset();
    
    //fixed nav
    $(window).scroll(function(){
        if($(window).scrollTop() > offset.top) {
            $('#bottom_header').addClass('fixedNav');
        } else {
            $('#bottom_header').removeClass('fixedNav');
        }
    });
    
    // slide testimonials
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
    
    // show all img box
    $('#view_all_gallery').click(function(){
        let content = '<div class="gallery_line main_flex__nowrap flex__jcontent_between"><div class="box_img_gallery"><img src="img/gallery/1.jpg" alt="1"></div><div class="box_img_gallery"><img src="img/gallery/2.jpg" alt="2"></div></div><div class="name_gallery">Ulyana Busko / <span class="blue">North Miami Beach, FL 33162</span></div>';
        $('#gallery_box').append(content);
        $(this).remove();
    });
    
    
    // open modal to call
    $('#modal_box, #black_fill').hide();
    $('.call').click(function(){
        $('#modal_box, #black_fill').show();
    });
    
    $('.close_modal, #black_fill').click(function(){
        $('#modal_box, #black_fill').hide();
    });

});