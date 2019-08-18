//  25.5 数组迭代器
// 依次对数组中的每一个元素遍历，并将该元素的索引与索引值传入回调函数中
var eachArray = function(arr, fn){
    var i = 0 ,
        len = arr.length;
    // 遍历数组
    for(; i<len ; i++){
        // 依次执行回调函数，注意回调函数中传入的参数第一个为索引，第二个为该索引对应得值
        if(fn.call(arr[i],i,arr[i]) === false){
            break;
        }
    }
}

// 25.6 对象迭代器
// 对象迭代器
var eachObject = function(obj ,fn ){
    // 遍历对象中的每一个属性
    for(var i in obj ){
        // 依次执行回调函数，注意回调函数中传入得函数第一个为属性，第二个为该属性对应的值
        if(fn.call(obj[i] ,i ,obj[i]) === false){
            break;
        }
    }
}