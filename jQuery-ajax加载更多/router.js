//服务端 router.js

app.get('/loadMore',function(req,res){
    var pageIndex = req.query.page; //获得前端的页数
    var len = req.query.length  //获得前端给的长度，再按前端的要求把对应的长度发给他
    var news = []

    for(var i=0;i<len;i++){
        news.push('新闻' + (pageIndex*3 + i)) //遍历这个news，每次向news里面push三条新闻
    }
    res.send({
        status: 0,
        data: news
    });
});