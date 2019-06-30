// 简约版属性样式方法库
var A = {
    // 通过id获取元素
    g: function(id){
        return document.getElementById(id);
    },
    // 设置元素css属性
    css: function(id,key,value){
        document.getElementById(id).style[key]=value;
    },
    attr: function(id,key,value){
        document.getElementById(id)[key]=value
    },
    html: function(id,html){
        document.getElementById(id).innerHTML = html;
    },
    // 为元素绑定事件
    on: function(id,type,fn){
        document.getElementById(id)['on'+type]=fn;
    }
}
A.css('box','background','red');
A.attr('box','className','box');
A.html('box','这是新添加的内容');
A.on('box','click',function(){
    A.css('box','width','500px');
});