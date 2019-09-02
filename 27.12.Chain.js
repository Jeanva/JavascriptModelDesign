A.fn.extend({
    // 添加事件
    on : (function(){
        // 标准浏览器DOM2级事件
        if(document.addEventListener){
            return function(type, fn){
                var i = this.length -1;
                // 遍历所有元素添加事件
                for(; i>=0 ; i--){
                    this[i].addEventListener(type, fn, false);
                }
                console.log('this',this);
                // 返回源对象
                return this;
            }
        }else if(document.attachEvent){ // IE浏览器DOM2级事件
            return function(type,fn){
                var i = this.length - 1;
                for(; i>=0 ; i--){
                    this[i].addEvent('on'+type,fn);
                }
                return this;
            }
        }else{  // 不支持DOM2级事件浏览器添加事件
            return function(type,fn){
                var i = this.length - 1;
                for(; i>=0 ; i--){
                    this[i]['on'+type] = fn;
                }
                return this;
            }
        }
    })()
});

A.extend({
    // 将'-'分割线转化为驼峰式，如'border-color' -> 'borderColor'
    camelCase : function(str){
        return str.replace(/\-(\w)/g,function(all, letter){console.log('all',all,'letter',letter);
            return letter.toUpperCase();
        });
    }
});

A.fn.extend({
    // 设置css样式
    css : function(){
        var arg = arguments,
            len = arg.length;
        if(this.length <1 ){
            return this;
        }
        // 只有一个参数时
        if(len == 1){
            // 如果为字符串则为获取第一个元素CSS样式
            if(typeof arg[0]==='string'){
                // IE
                if(this[0].currentStyle){
                    return this[0].currentStyle[name];
                }else{console.log(getComputedStyle(this[0],false));
                    return getComputedStyle(this[0],false)[name];
                }
            }else if (typeof arg[0] === 'object'){  // 为对象时则设置多个样式
                for(var i in arg[0]){       //遍历每个样式
                    for(var j = this.length -1;j>=0;j--){
                        // 调用拓展方法 camelCase将'-'分割线转化为驼峰式
                        this[j].style[A.camelCase(i)] = arg[0][i]
                    }
                }
            }
        }else if(len === 2){    // 两个参数则设置一个样式
            for(var j = this.length-1 ;j>=0;j--){
                this[j].style[A.camelCase(arg[0])] = arg[1];
            }
        }
        return this;
    }
});

A.fn.extend({
    // 设置属性
    attr : function(){
        var arg = arguments,
            len = arg.length;
        if(this.length < 1){
            return this;
        }
        // 如果一个参数
        if(len === 1){
            // 为字符串则获取第一个元素属性
            if(typeof arg[0] === 'string'){
                return this[0].getAttribute(arg[0]);
            }else if(typeof arg[0] === 'object'){
                for(var i in arg[0]){   // 遍历属性
                    for(var j =this.length -1; j>=0 ; j--){
                        this[j].setAttribute(i , arg[0][i]);
                    }
                }
            }
        }else if( len === 2){   // 两个参数则设置每个元素单个属性
            for(var j = this.length - 1; j >= 0 ; j--){
                this[j].setAttribute(arg[0],arg[1]);
            }
        }
        return this;
    }
});

A.fn.extend({
    // 获取或者设置元素的内容
    html: function(){
        var arg = arguments,
            len = arg.length; //console.log(arg);
        // 无参数则获取第一个元素的内容
        if(len === 0){
            return this[0] && this[0].innerHTML;
        }else{  // 一个参数则设置每一个元素的内容
            for(var i = this.length - 1; i>=0 ; i--){
                this[i].innerHTML = arg[0];
            }
        }
        return this;
    }
})

// 27.13
A('div')
.css({
    height:'30px',
    border:'1px solid #000',
    'background-color': 'red'
})
.attr('class','demo')
.html('add demo text')
.on('click',function(){
    console.log('clicked');
});
// console.log(A('div').camelCase());