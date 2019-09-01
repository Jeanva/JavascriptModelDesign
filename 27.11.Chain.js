// 对象拓展
// A.extend = A.fn.extend = function(){//console.log(arguments[0]);
//     // 拓展对象从第二个参数算起
//     var i =1,
//         // 获取参数长度
//         len = arguments.length,
//         // 第一个参数为源对象
//         target = arguments[0],
//         // 拓展对象中的属性
//         j;
//     // 如果只传一个参数
//     if(i == len ){
//         // 元对象为当前对象
//         target = this; //console.log(this);
//         // i从0计数
//         i-- ;
//     }
//     // 遍历参数中拓展对象
//     for(;i< len ; i++){
//         // 遍历拓展对象中的属性
//         for(j in arguments[i]){
//             // 拓展源对象
//             target[j] = arguments[i][j]; //console.log('arguments[i][j]',arguments[i],target[j]);
//         }
//     }
//     // 返回源对象
//     return target;
// }

// 拓展一个对象
var demo1 = A.extend({first:1},{second:2},{third:3});
console.log(demo1);

// 拓展A.fn方式一     ----------------- 有疑问，undefined
// A.extend(A.fn , {version: '1.0'});
// console.log(A('demo').version);         // 原书中代码， undefined
A.extend(A.fn,{version:1});        // 可运行代码
console.log(A.fn.version);

// 拓展A.fn 方式二    ------------------ 有疑问，is not a function
A.fn.extend({ getVersion: function(){ return this.version }})
// console.log(A('demo').getVersion());        // ------原书中代码， is not a function
console.log(A.fn.getVersion());                // 可运行代码

// 拓展A方式一
A.extend(A,{author:'八戒吃瓜'});
console.log(A.author);

// 拓展A方式二
A.extend({nickname:'大圣留步'});
console.log(A.nickname);