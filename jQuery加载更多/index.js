
//添加商品
var products = [
    {
        img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
        name: '珂兰 黄金手 猴哥款',
        price: '￥405.00'
    },{
        img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
        name: '珂兰 黄金转运珠 猴哥款',
        price: '￥100.00'
    },{
        img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
        name: '珂兰 黄金手链 3D猴哥款',
        price: '￥45.00'
    }
];

function createCommodityHtml(src,name,price){
    var html = '';
    html += '<li>';
    html += '<div class="cover"><a class="btn" href="">立即抢购</a></div>';
    html += '<a href="#">';
    html += '<img src="' + src + '" alt="">';
    html += '<div class="commodity-name">'+ name + '</div>';
    html += '<div class="commodity-price">' + price + '</div>';
    html += '</a>';
    html += '</li>';
    return html;
}

$('.layout .add-more').on('click',function(){
    var commodity1 = createCommodityHtml(products[0].img,products[0].name,products[0].price);
    var commodity2 = createCommodityHtml(products[1].img,products[1].name,products[1].price);
    var commodity3 = createCommodityHtml(products[2].img,products[2].name,products[2].price);

    $('.commodity').append(commodity1);
    $('.commodity').append(commodity2);
    $('.commodity').append(commodity3);
})

//鼠标悬停事件
var $tabContentCover = $('.commodity');

$tabContentCover.on('mouseenter','.cover',function(){
    console.log($(this));
    $(this).addClass('hover');
})

$tabContentCover.on('mouseleave','.cover',function(){
    $(this).removeClass('hover');
})

//回到顶部
var $goTop = $('.go-top');
$(window).on('scroll',function(){
    var top = $(window).scrollTop();
    if(top > 200){
        $goTop.css('display','block');
    }else{
        $goTop.css('display','none');
    }
})

$goTop.on('click',function(){
    $(window).scrollTop(0);
})