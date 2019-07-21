// 外观模式简化元素得获取
function $tag(tag , context){
    context = context || document;
    return context.getElementsByTagName(tag);
}
// 提交按钮点击
$tag('input')[1].onclick = function(){
    // 获取输入框内得内容
    var value = $tag('input')[0].value;

    InputStrategy.addStrategy('nickname',function(value){
        return /^[a-zA-Z]\w{3,7}$/.test(value) ? '':'请输入4-8位昵称,如yyyy'
    });
    // 获取昵称验证结果
    $tag('span')[0].innerHTML = InputStrategy.check('nickname',value);
}