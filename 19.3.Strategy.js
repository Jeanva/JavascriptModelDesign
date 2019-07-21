// 策略模式

// 价格策略对象
var PriceStrategy = function(){
    // 内部算法对象
    var strategy = {
        // 100 返 30
        return30 : function(price){
            // parseInt 可通过~~、| 等运算符替换，要注意此时price要在[-2147483648,2147483647]之间
            // +price 转化为数字类型
            return +price + parseInt(price / 100)*30;
        },
        // 100 返50
        return50 : function(price){
            return +price + parseInt(price / 100)*50;
        },
        // 9折
        percent90 : function(price){
            // Javascript 在处理淆数乘除法时有bug , 故运算前转化为整数
            return price * 100 * 90 / 10000;
        },
        // 8折
        percent80 : function(price){
            return price * 100 * 90 / 10000;
        },
        percent50 : function(price){
            return price * 100 * 50 / 10000;
        }
    }
    // 策略算法调用接口
    return function(algorithm,price){
        // 如果算法存在，则调用算法，否则返回false
        return strategy[algorithm] && strategy[algorithm](price)
    }
}();
var price = PriceStrategy('return50','314.67');
console.log(price);
var price1 = PriceStrategy('percent90','314.67');
console.log(price1);