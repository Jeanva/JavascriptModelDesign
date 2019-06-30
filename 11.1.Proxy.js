// 代理模式(Proxy):由于一个对象不能直接引用另一个对象，所以需要通过代理对象在这个两个对象之间起到中介的作用
$.ajax({
    url:'http://localhost:3000/home',
    success:function(res){
        console.log(res);
    }
});