// 原型链继承
var A = function(){}
A.prototype = {
    length :2,
    size: function(){
        return this.length;
    }
}

var a = new A();
console.log(a.size());
console.log(A.size());          // size绑定在A的原型上,并没有绑定在A自身上
console.log(A().size());        // A函数对象执行的结果是没有返回值的，所以找不到size方法