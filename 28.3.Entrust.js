var article = document.getElementById('article');
article.onclick = function(){
    var e = e || window.event,
        tar = e.target || e.srcElement;
    if(tar.nodeName.toLowerCase() === 'p'){
        if(tar.innerHTML === ''){
        tar.innerHTML = '我要更改这段内容';
        }else{
            tar.innerHTML = '';
        }
    }
}

var p = document.createElement('p');
p.innerHTML = '新增一段内容';
article.appendChild(p);