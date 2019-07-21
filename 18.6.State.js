// 创建超级玛丽状态类
var MarioState = function(){
    // 内部状态私有变量
    states ={
        jump : function(){   // 跳跃
            console.log('jump');
        },
        move : function(){   // 移动
            console.log('move');
        },
        shoot : function(){   // 射击
            console.log('shoot');
        },
        squat : function(){   // 蹲下
            console.log('squat');
        }
    };
    // 动作控制类
    var Action = {
        // 改变状态方法
        changeState : function(){
            // 组合动作通过传递多个参数实现
            var arg = arguments ; 
            // 重置内部状态
            _currentState = {};
            // 如果有动作则添加动作
            if(arg.length){
                // 遍历动作
                for(var i =0,len =arg.length; i<len ;i++){
                    _currentState[arg[i]] = true;
                }
            }
            // 返回动作控制类
            return this;
        },
        // 执行动作
        goes: function(){
            console.log('触发一次动作');
            // 遍历内部状态保存的动作
            for(var i in _currentState){
                // 如果该动作存在则执行
                states[i] && states[i]();
            }
            return this;
        }
    }
    // 返回接口方法 change,goes
    return {
        change : Action.changeState,
        goes : Action.goes
    }
}

// 两种使用方式
// MarioState()
//     .change('jump','shoot')     // 添加跳跃与设计动作
//     .goes()                     // 执行动作
//     .goes()                 // 执行动作
//     .change('shoot')        // 添加射击动作
//     .goes();                // 执行动作

// 创建一个超级玛丽
var Mario = new MarioState();
Mario
    .change('move','shoot','squat')
    .goes()
    .goes()
    // .change('squat')
    // .goes();
