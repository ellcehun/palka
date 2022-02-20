$(document).ready(function(){
    $('.bxslider').bxSlider({
        pager: true, auto: true,
    });
});
$(document).ready(function(){
    $('.bxslider_team').bxSlider({
        pager: true, controls: false, auto: true,
    });
});
$(document).ready(function(){
    $('.flexslider').flexslider({
        animation:"slide",
        animationLoop: false,
        itemWidth: 200,
        itemMargin: 25,
        touch: true,
        auto: true,
    });
});
$(document).ready(function(){
    $('.accordion').accordion({
        defaultOpen:""
       
    });
});
$(document).ready(function($){
    $('.primary-nav-trigger').on('click', function(){
        $('.menu-icon').toggleClass('is-clicked');
        $('.primary-nav').toggleClass('is-visible');
        $('body').toggleClass('overflow-hidden');
    });
});