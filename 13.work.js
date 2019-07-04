// 创建一个对象桥接method,实现为对象拓展方法的功能
function OriginObj(x,y){
    this.x=x;
    this.y=y;
}
OriginObj.prototype.size=function(){
    console.log(this.x,this.y);
    // return {x:this.x,y:this.y};
    console.log('长4厘米，宽3厘米');
}
function subObjOne(x,y){
    // OriginObj.call(this,x,y);
    this.OriginObj = new OriginObj(3,4);
}
// subObjOne.prototype = new OriginObj();
subObjOne.prototype.size = function(){
    this.OriginObj.size();
}

const s = new subObjOne(3,4);
s.size()