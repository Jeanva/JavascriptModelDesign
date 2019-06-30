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