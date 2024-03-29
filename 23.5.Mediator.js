/*
    显隐导航小组件
    参数 mod        模块
    参数 tag        处理的标签（消息提醒b,网址span ）
    参数 showOrHide     显示还是隐藏
*/ 
var showHideNavWidget = function(mod,tag,showOrHide){
    // for(let i in arguments){console.log(arguments[i]);
    // 获取导航模块
    var mod = document.getElementById(mod),
        // 获取下面的标签名为 tag 的元素
        tag = mod.getElementsByTagName(tag),
        // 如果设置为false或者为hide则值为hidden, 否则为visible
        showOrHide = (!showOrHide || showOrHide=='hide')?'hidden' :'visible';
    // 占位隐藏这些标签
    for(var i=tag.length-1;i>=0;i--){
        tag[i].style.visibility = showOrHide;
    }
};

// 用户收藏导航模块
(function(){
    // ...其他交互逻辑
    // 订阅隐藏用户收藏导航消息提醒消息
    Mediator.register('hideAllNavNum',function(){
        showHideNavWidget('collection_nav','b',false)
    });
    // 订阅显示用户收藏导航消息提醒消息
    Mediator.register('showAllNavNum',function(){
        showHideNavWidget('collection_nav','b',true);
    });
    // 订阅隐藏用户收藏导航网址消息
    Mediator.register('hideAllNavUrl',function(){
        showHideNavWidget('collection_nav','span',false);
    });
    // 订阅显示用户收藏导航网址消息
    Mediator.register('showAllNavUrl',function(){
        showHideNavWidget('collection_nav','span',true);
    });
})();

// 推荐用户导航
(function(){
    // ..其他交互逻辑
    // 订阅隐藏推荐用户导航消息提醒消息
    Mediator.register('hideAllNavNum',function(){
        showHideNavWidget('recommend_nav','b',false);
    });
    Mediator.register('hideAllNavUrl',function(){
        showHideNavWidget('recommend_nav','span',false);
    });
    // 订阅显示推荐用户导航消息提醒消息
    Mediator.register('showAllNavNum',function(){
        showHideNavWidget('recommend_nav','b',true);
    })
    Mediator.register('showAllNavUrl',function(){
        showHideNavWidget('recommend_nav','span',true);
    });
})();

// 最近常用导航
(function(){
    // 其他交互逻辑
    // 订阅显示最近常用导航网址消息
    Mediator.register('hideAllNavUrl',function(){
        showHideNavWidget('recently_nav','span','hide');
    });
    // 订阅显示最近常用导航网页消息
    Mediator.register('showAllNavUrl',function(){
        showHideNavWidget('recently_nav','span','show');
    });
})();

// // 23.6
// // 发布消息
// // 设置层模块
(function(){
    // 消息提醒选框
    var hideNum =document.getElementById('hide_num'),
    // 网址选框
    hideUrl = document.getElementById('hide_url');
    // 消息提醒选框事件
    hideNum.onchange = function(){
        // 如果勾选
        if(hideNum.checked){
            // 中介者发布隐藏消息提醒功能消息
            Mediator.send('hideAllNavNum');
        }
        else{
            // 中介者发布显示消息提醒功能消息
            Mediator.send('showAllNavNum');
        }
    }
    // 网址选框事件
    hideUrl.onchange = function(){
        // 如果勾选
        if(hideUrl.checked){
            // 中介者发布隐藏所有网址功能消息
            Mediator.send('hideAllNavUrl');
        }else{
            // 中介者发布显示所有网址功能消息
            Mediator.send('showAllNavUrl');
        }
    }
})();