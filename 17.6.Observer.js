// 外观模式 简化获取元素
function $(id){
    return document.getElementById(id);
}
// 工程师 A
(function(){
    // 追加一则消息
    function addMsgItem(e){
        var text = e.args.text,
        ul = $('msg'),                          // 获取消息中用户添加的文本内容
        li = document.createElement('li'),      // 留言容器元素
        span = document.createElement('span');  // 创建内容容器元素
        span.innerHTML = '删除';
        li.innerHTML = text ;                   // 写入评论
        // 删除按钮
        span.onclick = function(){
            ul.removeChild(li);                 // 移除留言
            // 发布删除留言消息
            Observer.fire('removeCommentMessage',{num:-1});
        }
        // 添加删除按钮
        li.appendChild(span);
        // 添加留言节点
        ul.appendChild(li);
    }
    // 注册添加评论信息
    Observer.regist('addCommentMessage',addMsgItem);
})();

// 工程师B
(function(){
    function changeMsgNum(e){
        // 获取需要增加的用户消息数目
        var num = e.args.num;
        // 增加用户消息数目并写入页面中
        $('msg_num').innerHTML = parseInt($('msg_num').innerHTML) + num;
    }
    // 注册添加评论消息
    Observer.regist('addCommentMessage',changeMsgNum)
            .regist('removeCommentMessage',changeMsgNum);
})();

// 工程师C
(function(){
    // 用户点击提交按钮
    $('user_submit').onclick = function(){
        // 获取用户输入框中输入的信息
        var text = $('user_input');
        // 如果消息为空则提交失败
        if(text.value === ''){
            return ;
        }
        // 发布一则评论消息
        Observer.fire('addCommentMessage',{
            text: text.value,      // 消息评论内容
            num:1                  // 消息评论数目
        });
        text.value ='';            // 将输入框置为空
    }
})();