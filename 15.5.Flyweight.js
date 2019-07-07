var FlyWeight ={
    moveX : function(x){
        this.x = x;
        console.log('x',this.x);
    },
    moveY : function(y){
        this.y = y;
        console.log('y',this.y);
    }
}
var Player = function(x,y,c){
    this.className='player'
    this.x = x ;
    this.y = y;
    this.color = c;
}
Player.prototype = FlyWeight;
Player.prototype.changeC = function(c){
    this.color = c;
}
var Spirit = function(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
}
Spirit.prototype = FlyWeight;
Spirit.prototype.changeR = function(r){
    this.r = r;
    console.log('半径',this.r);
}
// 创建一个人
var player1 = new Player(5,6,'red');
console.log(player1);
player1.moveX(6);
player1.moveY(7);
player1.changeC('pink');

// 创建一个精灵
var spirit1 = new Spirit(2,3,4);
console.log(spirit1);

spirit1.moveX(3);
spirit1.moveY(4);
spirit1.changeR(5);