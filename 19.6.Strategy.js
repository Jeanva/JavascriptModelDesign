// 表单正则验证策略对象
var InputStrategy = function(){
    var strategy = {    
        notNull : function(value){  // 是否为空
            return /\s+/.test(value) ? console.log('请输入内容') : '';
        },
        number : function(value){// 是否是一个数字
            return /^[0-9]+(\.[0-9]+)?$/.test(value) ? '' :'请输入数字';
        },
        phone : function(value){// 是否是本地电话
            return /^\d[3]\-\d{8}$|^\d{4}\-\d{7}$/.test(value) ? '':'请输入正确的电话好吗格式，如：010-12345678 ';
        }
    }
    return {
        // 验证接口 type算法 value表单值
        check : function(type, value){  
            // 去除收尾空白符
            value = value.replace(/^\s+|\s+$/g,'');
            return strategy[type] ? strategy[type](value):'没有该类型的检测方法'
        },
        // 添加策略
        addStrategy : function(type,fn){
            strategy[type] = fn;
        }
    }
}();
var result1 =InputStrategy.check('number','23212423');
var result2 = InputStrategy.addStrategy('text',function(value){
    return /^\w+$/g.test(value) ? console.log(value): console.log('请输入文字!');
});
InputStrategy.check('text','Hello_');