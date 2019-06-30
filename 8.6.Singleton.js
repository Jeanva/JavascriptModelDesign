// 惰性引入单例
var LazySingle = (function(){
    // 单例实例引用
    var _instance = null;
    // 单例
    function Single(){
        // 这里定义私有属性和方法
        return {
            publicMethod : function(){},
            publicProperty : '1.0'
        }
    }
    // 获取单例对象接口
    return function(){
        // 如果未创建单例将创建单例
        if(!_instance){
            _instance = Single();
        }
        // 返回单例
        return _instance ;
    }
})();
console.log(LazySingle().publicProperty);

/**单例模式的主要作用是，在应用程序中一个类只有一个实例存在，因此可以节约系统资源，对于一些
 * 需要频繁创建和销毁的对象，单例模式无疑可以提高系统的性能，
 * 
 * 惰性单例的意思是，只有在用户需要用到这个单例时，才去创建它，
 * 而不是在系统启动的时候，就把所有单例对象创建好
 */