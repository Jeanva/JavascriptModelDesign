// 外观模式实现
function addEvent(dom,type,fn){
    // 对于支持DOM2级事件处理程序 addEventListener 方法的浏览器
    if(dom.addEventListener){
        dom.addEventListener(type,fn,false);
        // 对于不支持 addEventListener方法但支持 attachEvent方法的浏览器
    }else if(dom.attachEvent){
        dom.attachEvent('on'+type,fn);
        // 对于不支持addEventListener方法也不支持attachEvent方法，但是支持 on+'事件名'的浏览器
    }else{
        dom['on'+type]=fn;
    }
}

let myInput = document.getElementById('myinput');
addEvent(myInput, 'click',function(){
    console.log('绑定第一个事件');
})
addEvent(myInput, 'click', function(){
    console.log('绑定第二个事件');
})
addEvent(myInput,'click',function(){
    console.log('绑定第三个事件');
})