// 抽象
function changeColor(dom, color, bg){console.log(dom);
    // 设置元素的字体颜色
    dom.style.color = color;
    // 设置元素的背景颜色
    dom.style.background = bg;
    dom.innerHTML+='改变';
}

let span = document.getElementsByTagName('span');
span[0].onmouseover = ()=>changeColor(span[0],'red','#fff');
span[0].onmouseout = ()=>changeColor(span[0],'#000','#fff');
span[1].onmouseover = function(){
    changeColor(this,'red','#fff');
}
span[1].onmouseout = function(){
    changeColor(this,'#000','#fff');
}