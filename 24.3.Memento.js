// Page备忘录类
var Page = function(){
    // 信息缓存对象
    var cache = {};
    /** 
     * 主函数
     * 参数 page 页码
     * 参数 fn   成功回调函数
    */
   return function(page,fn){
       // 判断该页数据是否在缓存中
       if(cache[page]){
           // 恢复到该页状态，显示该页内容
           showPage(page,cache[page]);
           // 执行成功回调函数
           fn && fn();
       }else{
           // 若缓存 Cache 中无该页数据
           $.post('http://localhost:3001/getNewsData',{
               // 请求携带数据 page 页码
               page : page
           },function(res){console.log('res',res);
               // 成功返回
               if(res.errNo == 0){
                   // 显示该页数据
                   showPage(page,res.data);
                   // 将该页数据种入缓存中
                   cache[page] = res.data;
                   //执行成功回调函数
                   fn && fn();
               }else{
                   //处理异常
               }
           })
       }
   }
}

// 下一页按钮点击事件
$('#next_page').click(function(){
    console.log('下一页');
    // 获取新闻内容元素
    var $news = $("#news_content"),
        // 获取新闻内容元素当前页数据
        page = $news.data('page');
        console.log($news);
    // 获取并显示新闻
    Page(page,function(){
        // 修正新闻内容元素当前页数据
        $news.data('page',page +1);console.log('page',page);
    })
})