var A = function(selector){
    return A.fn.init(selector);
}
A.fn = A.prototype = {
    init: function(selector){
        this[0]= document.getElementById(selector);     // 作为当前对象的属性值保存
        this.length = 1;        // 校正length属性
        console.log(this === A.fn,this === A.prototype,this);
        return this;            // 返回当前对象
    },
    length : 2,
    size: function(){
        return this.length;
    }
}
var demo = A('demo');
console.log(demo);
console.log(demo.size());

var test = A('test');
console.log(demo);