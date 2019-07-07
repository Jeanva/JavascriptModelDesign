//寄生组合式继承
// 传递参数 subClass 子类
// 传递参数 superClass 父类
function inheritPrototype(subClass,superClass){
    // 复制一份父类的原型父辈保存在变量种
    var p = inheritObject(superClass.prototype);
    // 修正因为重写子类原型导致子类的constructor属性被修改
    p.constructor = subClass;
    // 设置子类的原型
    subClass.prototype = p;
}