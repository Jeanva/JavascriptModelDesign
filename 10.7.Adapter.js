// 为简化模型，这里使用jQuery的ajax方法 理想数据是一个一维数组
function ajaxAdapter(data){
    // 处理数据并返回新数据
    return console.log([data['key1'],data['key2'],data['key3']])                
}
$.ajax({
    url: 'someAddress.php',
    success:function(data,status){
        if(data){
            // 使用适配后的数据----返回的对象
            doSomeThing(ajaxAdapter(data));
        }
    }
})
function doSomeThing(obj){
    var _adapter = {
        name:'夜雨清荷',
        title:'设计模式',
        age:24,
        color:'pink',
        size:100,
        price:50
    };
    for(var i in _adapter){
        _adapter[i] = obj[i]|| _adapter[i];
    }
}