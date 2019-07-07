// 享元模式 Flyweight：运用共享技术有效的支持大量的细粒度的对象，避免对象间拥有相同内容造成多余的开销

// 翻页需求
var article = ['news0','news1','news2','news3','news4','news5'];
var dom = null,
    paper =0,
    num =5,
    i =0,
    len = article.length;
for(;i<len ;i++){
    dom = document.createElement('div');
    dom.innerHTML = article[i];     // 添加新闻标题
    if(i >= num){                   //默认显示第一页
        dom.style.display = 'none';     // 超出第一页新闻隐藏
    }
    document.getElementById('container').appendChild(dom);
}
// 下一页按钮 绑定事件
document.getElementById('next_page').onclick = function(){
    var div = document.getElementById('container').getElementsByTagName('div'),
    //获取所有新闻标题包装元素
    j=k=n=0;    // j,k循环变量，n当前页显示的第一个新闻序号
    n = ++paper % Math.ceil(len/num)*num;   // 获取当前页显示的第一个新闻序号
    for(; j<len ;j++){
        div[j].style.display = 'none';  // 隐藏所有新闻
    }
    for(;k<5;k++){
        if(div[n+k]){
            div[n+k].style.display = 'block';
        }
    }
}