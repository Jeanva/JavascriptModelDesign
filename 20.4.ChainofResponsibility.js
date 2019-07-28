/* 处理响应数据
 * 参数 data        相应数据
 * 参数 dealType    相应数据处理对象
 * 参数 dom         事件源
 *  */
var dealData = function(data , dealType , dom){
    // 对象 toString方法简化引用
    var dataType = Object.prototype.toString.call(data);
    // 判断相应数据处理对象
    switch(dealType){
        // 输入框提示功能
        case 'sug':
            // 如果数据为数组
            if(dataType === '[object Array]'){
                // 创建提示框组件
                return createSug(data , dom);
                break;
            }
            // 将响应的对象数据转化为数组
            if(dataType === "[object Object]"){
                var newData = [];
                for(var i in data) newData.push(data[i]);
                //创建提示框组件
                return createSug(newData,dom);
                break;
            }
            // 将响应得其他数据转化为数组
            return createSug([data] , dom);
            break ;
        case 'validate':
            // 创建校验组件
            return createValidataResult(data, dom);
            break;
    }
}