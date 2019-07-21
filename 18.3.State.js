// 投票结果状态对象
var ResultState = function(){
    var States={
        // 每种状态作为一种独立方法保存
        state0: function(){
            console.log('这是第一种情况');
        },
        state1: function(){
            console.log('这是第二种状态');
        },
        state2: function(){
            console.log('这是第三者状态');
        },
        state3: function(){
            console.log('这是第四种 状态');
        }
    }
    // 获取某一种状态并执行其对应的方法
    function show(result){
        States['state'+ result] && States['state'+result]();
    }
    return{
        // 返回调用状态方法接口
        show : show 
    }
}(); 
ResultState.show(3);