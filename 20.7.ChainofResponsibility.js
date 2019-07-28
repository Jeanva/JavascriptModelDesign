var input = document.getElementsByTagName('input');
// 监听内容改变事件做内容校验
input[0].onchange = function(e){
    sendData({value: input[0].value},'validate',input[0]);
}
// 监听键盘事件对内容做提示处理
input[1].onkeydown = function(e){
    sendData({value: input[1].value}, 'sug', input[1]);
}