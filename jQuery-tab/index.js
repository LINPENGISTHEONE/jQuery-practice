
//点击鼠标，添加active类
$('.tab-header>li').on('click',function(){
    var $this = $(this),
        $index = $this.index(),
        $findTabContentLi = $(this).parents('.tab').find('.tab-content>li');

    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $findTabContentLi.removeClass('active');
    $findTabContentLi.eq($index).addClass('active');
})

//鼠标悬停事件
var $tabContentCover = $('.tab-content .cover');
$tabContentCover.on('mouseenter',function(){
    $(this).addClass('hover');
})

$tabContentCover.on('mouseleave',function(){
    $(this).removeClass('hover');
})