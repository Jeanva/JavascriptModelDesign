// 适配器模式：将一个类的接口转化成另外一个接口，以满足用户需求，使类之间接口的不兼容问题通过适配器得到解决。

// window.A = A = JQuery;  // A=JQuery , window.A = A

//定义框架
var A = A ||{};
// 通过ID 获取元素
A.g = function(id){
    // return document.getElementById(id);
    // 通过JQuery 获取JQuery对象，然后返回第一个成员
    return $(id).get(0);
}
// 为元素绑定事件
A.on = function(id, type, fn){
    // 如果传递参数是字符串则以id 处理，否则以元素对象处理
    // var dom = typeof id ==='string'? this.g(id):id;
    // 标准DOM2级添加事件方式
    // if(dom.addEventListener){
    //     dom.addEventListener(type,fn,false);
    // }else if(dom.attachEvent){  // IE DOM2级添加事件方式
    //     dom.attachEvent('on'+type,fn); 
    // }else{//简易添加事件方式
    //     dom['on'+type] = fn;
    // }
    
    var dom = typeof id === 'string'?$('#'+id) : $(id);
    dom.on(type,fn);
}

// 窗口加载完成事件
A.on(window,'load',function(){
    // 按钮点击事件
    A.on('mybutton','click',function(){
        console.log('myButton is clicked! jquery!');
    })
})