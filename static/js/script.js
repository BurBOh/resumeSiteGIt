$(document).ready(function(){
    $('.slider').slick({
        arrow: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.buttom_menu').on('click', function(){
        $('.close_menu').css({
            'display': 'grid',
            'position': 'fixed'
        });

        $('.menu_active').css({
            'animation': 'aMenu .3s',
        });


        $('.menu_active').css({
            'right': '0'
        });

        $('body').css({
            'overflow': 'hidden'
        });
        
    });

    $('.close_btn').on('click', function(){

        $('.menu_active').css({
            'animation': 'cMenu .3s',
            'position': 'fixed'
        });


        $('.menu_active').css({
            'right': '-100%'
        });

        $('body').css({
            'overflow': 'scroll'
        });

        setTimeout(function(){$('.close_menu').css({'display': 'none'})}, 200);

    });

    $('.cMenu').on('click', function(){

        $('.menu_active').css({
            'animation': 'cMenu .3s',
            'position': 'fixed'
        });


        $('.menu_active').css({
            'right': '-100%'
        });

        $('body').css({
            'overflow': 'scroll'
        });

        setTimeout(function(){$('.close_menu').css({'display': 'none'})}, 200);


    });
});