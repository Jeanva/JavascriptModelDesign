// 单动作条件判断 每增加一个动作就需要添加一个判断
var lastAction = '';
function changeMario(action){
    if(action == 'jump'){
        console.log('Mario Jump');
    }else if(action == 'move'){
        console.log('Mario Move');
    }else { console.log('Mario 其他动作');}
    lastAction = action;
}
console.log('jump');
// 复合动作对条件判断的开销是翻倍的
var lastAction1 = '';
var lastAction2 = '';
function changeMario(action1,action2){
    if(action1 == 'shoot1'){
        console.log('Mario shoot1');
    }else if(action1 == 'jump'){
        console.log('shoot2');
    }else if(action1 == 'move'&& action2 == 'shoot'){
        console.log('Mario move and shoot');
    }else if(action1 == 'jump' && action2 == 'shoot'){
        console.log('Mario jump and shoot');
    }
    // 保留上一个动作
    lastAction1 = action1 || '';
    lastAction2 = action2 || '';
}
console.log('jump','shoot');