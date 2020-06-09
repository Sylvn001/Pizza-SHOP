

function scroll_animation()
{
    $('.scroll_animation').each(function(){
        
        if($(window).scrollTop() + $(window).height() - 100 > $(this).offset().top){
            $(this).addClass('active');
        }
    });
}

$(function(){

    $(document).scroll(function(){
        scroll_animation();
    });
});