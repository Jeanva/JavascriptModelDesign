var ul = document.getElementById('container');
ul.onclick = function(e){
    var e = e || window.event,
        tar = e.target || e.srcElement; console.log('tar',tar.nodeName,tar.tagName);
    if(tar.nodeName.toLowerCase() === 'li'){
        tar.style.backgroundColor = 'grey';
    }
}