$(document).ready(function(){
    $('.head__Bmenu').on('click', function(){
        $('.head__menu__active').css({
            'display': 'grid',
            'height': '25%',
            'animation':' size 200ms'
        });

        $('.head__Bmenu').css({
            'display': 'none',
        });
        
        $('.close_btn').css({
            'display': 'block',
        });
    });

    $('.close_btn').on('click', function(){
        $('.head__menu__active').css({
            'height': '0%',
            'animation':' Rsize 200ms'
        });
        
        $('.head__Bmenu').css({
            'display': 'block',
        });

        $('.close_btn').css({
            'display': 'none',
        });

        setTimeout(function(){$('.head__menu__active').css({'display': 'none'})}, 100);

    });

    $('.close_block').on('click', function(){
        $('.head__menu__active').css({
            'height': '0%',
            'animation':' Rsize 200ms'
        });

        $('.head__Bmenu').css({
            'display': 'block',
        });

        $('.close_btn').css({
            'display': 'none',
        });

        setTimeout(function(){$('.head__menu__active').css({'display': 'none'})}, 100);

    });

    $('.btn_up').on('click', function(){
        window.scrollTo(0, 0);
    });
});