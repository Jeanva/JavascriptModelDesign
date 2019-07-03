var spans = document.getElementsByTagName('span');
spans[0].onmouseover = function(){
    changeColor(this, 'red' , "#ddd");
}
spans[1].onmouseover = function(){
    changeColor(this, '#333','#f5f5f5');
}