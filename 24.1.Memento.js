// 下一页按钮点击事件
// $('#next_page').click(function(){
//     // 获取新闻内容元素
//     var $news = $('#news_content');
//     // 获取新闻内容元素当前页数据
//     page = $news.data('page');
//     // 获取并显示新闻
//     getPageData(page,function(){
//         //修正新闻内容元素当前页数据
//         $news.data('page',page+1);
//     })
// });

// 上一页按钮点击事件
$('#pre_page').click(function(){
    // 显示上一页
});

// 请求某一页新闻page: 当前页   fn:成功回调函数
function getPageData(page, fn){
    // post 请求数据
    $.post('./data/getNewsData.php',{
        // 数据：页码
        page : page
    },function(res){
        // 正常返回数据
        if(res.errNo == 0){
            // 显示当前页
            showPage(page, res.data);
            // 执行回调函数
            fn && fn();
        }
    })
}
// 显示某页逻辑
function showPage(page,data){
    // ...
    console.log('page',page,'data',data);
}