$.get('./deal.php?q=banner',function(res){
    // 处理banner模块逻辑
})
$.get('./deal.php?q=aside',function(res){
    // 处理aside模块逻辑
})
$.get('./deal.php?q=article',function(res){
    // 处理article模块数据
})
$.get('./deal.php?q=member',function(res){
    // 处理member模块数据
})
$.get('./deal.php?q=message',function(res){
    // 处理message模块数据
})

var Deal = {
    banner : function(){
        // 处理banner模块逻辑
    },
    aside : function(){
        // 处理aside模块逻辑
    },
    article : function(){
        // 处理article模块数据
    },
    member : function(){
        // 处理member模块数据
    },
    message : function(){
        // 处理message模块数据
    }
}
$.get('./deal.php?',function(res){
    // 数据拆包分发
    for(var i in res){
        Deal[i] && Deal[i](res[i]);
    }
})

