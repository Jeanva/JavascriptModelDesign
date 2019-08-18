// 同步变量
var A = {
    // 所有用户公有
    common : {},
    // 客户端数据
    client : {
        user:{
            username : '雨夜清河',
            uid : '123'
        }
    },
    // 服务器端数据
    server : {}
}

// 同步变量迭代取值器
AGetter = function(key){
    // 如果不存在 A 则返回未定义
    if(!A) return undefined;
    var result = A;     // 获取同步变量A对象
    key = key.split('.'); console.log('key',key);
    // 迭代同步变量A对象属性
    for(let i =0, len=key.length ; i<len;i++){ console.log('key in for',key[i]);
        // 如果第i层属性存在对应的值 则迭代该属性值
        if(result[key[i]] !== undefined){console.log('before',result);
            result = result[key[i]];console.log('result',result);
        }else{  // 如果不存在则返回未定义
            return undefined;
        }
    }
    // 返回获取得结果
    return result;
}
// 获取用户名数据
// console.log(AGetter('client.user.username'));     
// console.log(AGetter('client.user'));  
// 获取本地语言数据
// console.log(AGetter('server.lang.local'));

// 同步变量迭代赋值器
ASetter = function(key,val){
    // 如果不存在A则返回未定义
    if(!A) return false;
    var result = A;     // 获取同步变量A对象
    key = key.split('.');
    let counter=0;   // 解析属性层次序列
    // 迭代同步变量A对象属性
    for(let i =0, len = key.length; i<len -1; i++){
        // 如果第i层属性对应的值不存在，则定义为对象
        if(result[key[i]] === undefined){
            result[key[i]] = {};
        }
        // 如果第i层属性对应的值不是对象{Object}的一个实例，则抛出错误
        if(!(result[key[i]] instanceof Object)){ 
            throw new Error('A.'+key.splice(0,i+1).join('.')+'is not Object');
            return false;
        }//console.log('result[key[i]]',result[key[i]]);
        // 迭代该层属性值
        result = result[key[i]];
        counter= i;
    // console.log('set result',result,'key',key,'counter',counter);
    }
    // 返回设置成功的属性值
    return result[key[counter]] = val;

}
// 缓存添加体育新闻模块数据
console.log(ASetter('client.module.news.sports','on'));
console.log(ASetter('client.user.username.sports','on'));