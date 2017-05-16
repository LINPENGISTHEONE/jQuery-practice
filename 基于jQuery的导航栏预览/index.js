
//鼠标悬停事件
$('.nav-aside .category').on('mouseenter', function(){
    $(this).addClass('hover');
    // 或者
    // $(this).find('.child-panel').show();
    // 或者
    // $(this).find('.child-panel').css('display', 'block');
});

$('.nav-aside .category').on('mouseleave', function(){
    $(this).removeClass('hover');
    // 或者
    // $(this).find('.child-panel').hide();
    // 或者
    // $(this).find('.child-panel').css('display', 'none');
});   	
