// 创建一个提示框
new CancelAlert({
    title:'提示标题',
    content: '提示内容',
    success: function(){
        console.log('ok');
    },
    fail:function(){
        console.log('cancel');
    }
}).init();