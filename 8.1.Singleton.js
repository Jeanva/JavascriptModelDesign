function g(id){
    return console.log(g);
}
function css(id , key ,value){
    // 简单样式属性设置
    g(id).style[key] = value;
}
function attr(id,key,value){
    g(id)[key]=value;
}
function html(id, value){
    g(id)[value]=value;
}
function on(id, type,fn){
    g(id)['on'+type]=fn;
}                   