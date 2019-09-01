// selector  选择符， context 上下文
var A = function(selector,context){
    return new A.fn.init(selector, context);
}
A.fn = A.prototype = {
    constructor : A ,
    init :function(selector,context){
        // 获取元素长度
        this.length = 0,
        // 某人获取元素的上下文为document
        context = context || document;
        // console.log(context);
        if(~selector.indexOf('#')){console.log(~selector.indexOf('#'),selector.indexOf('#'));
            // 截取id并选择
            this[0] = document.getElementById(selector.slice(1));
            this.length = 1;
        }
        else{   // 如果是元素名称
            // 在上下文种选择元素
            var doms = context.getElementsByTagName(selector),
                i=0,
                len = doms.length;//console.log(doms);
            for(; i<len;i++){
                // 压入this中
                this[i] = doms[i];
            }//console.log(doms);
            // 校正长度
            this.length = len;
        }
        // 保存上下文
        this.context = context;
        // 保存选择符
        this.selector = selector;
        // 返回对象
        return this;
    },
    length : 2,
    size: function(){
        return this.length;
    },
    // 增强数组
    push : [].push,
    sort : [].sort,
    splice : [].splice
}
// console.log(A('li'));
// console.log(A('demo'));

A.extend = A.fn.extend = function(){//console.log(arguments[0]);
    // 拓展对象从第二个参数算起
    var i = 1,
        // 获取参数长度
        len = arguments.length,
        // 第一个参数为源对象
        target = arguments[0],
        // 拓展对象中的属性
        j;
    // 如果只传一个参数
    if(i == len ){
        // 元对象为当前对象
        target = this; //console.log(this);
        // i从0计数
        i-- ;
    }
    // 遍历参数中拓展对象
    for(;i< len ; i++){
        // 遍历拓展对象中的属性
        for(j in arguments[i]){
            // 拓展源对象
            target[j] = arguments[i][j]; //console.log('arguments[i][j]',arguments[i][j]);
        }
    }
    // 返回源对象
    return target;
}