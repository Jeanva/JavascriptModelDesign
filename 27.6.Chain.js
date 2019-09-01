var A = function(selector){
    return new A.fn.init(selector);     // new关键字的执行本质，是对构造函数的属性的一次复制
}
A.fn = A.prototype = {
    init: function(selector){ 
        this[0] = document.getElementById(selector);console.log(this.constructor);
        this.length = 1;
        // console.log(this === A.fn, this === A.prototype,this);
        return this;
    },
    length : 2,
    size: function(){
        return this.length;
    }
}
A.fn.init.prototype = A.fn; // 强化constructor

// console.log(A('demo'));
// console.log($('#demo'));
// console.log(A('test'));
console.log(A('demo').size());