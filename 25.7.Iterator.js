// 创建一个数组
for(var arr = [],i=0; i<5; arr[i++] =i);
eachArray(arr , function(i,data){
    console.log(i , data);
});

var obj = {
    a : 23,
    b : 56,
    c : 67
}
eachObject(obj, function(i,data){
    console.log(arguments);
    console.log(i,data);
});