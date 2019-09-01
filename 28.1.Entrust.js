var ul = document.getElementById('container'),
    li = document.getElementsByTagName('li'),
    i = li.length -1;
for(; i >= 0 ; i--){
    li[i].onclick = function(){
        this.style.backgroundColor = 'grey';
    }
}