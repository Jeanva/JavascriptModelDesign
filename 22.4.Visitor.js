function $(id){ return document.getElementById(id);};
bindIEEvent($('btn'),'click',function(e,d){
    $('test').innerHTML = e.type + d.text + this.tagName;
},{text:'test demo'});
