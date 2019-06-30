// 图片轮播类
var LoopImages = function(imgArr , container){
    this.imageArray = imgArr;       // 轮播图片数组
    this.container = container;     // 轮播图片容器
}
LoopImages.prototype = {
    // 创建轮播图片
    createImage : function(){
        console.log('LoopImages createImage function');
    },
    // 切换下一张图片
    changeImage : function(){
        console.log('LoopImages changeImage function');
    }
}
// 上下滑动切换类
var SlideLoopImg = function(imgArr,container){
    // 构造函数继承图片轮播类
    LoopImages.call(this, imgArr , container);
}
SlideLoopImg.prototype = new LoopImages();
// 重写继承的切换下一张图片方法
SlideLoopImg.prototype.changeImage = function(){
    console.log('SlideLoopImg changeImage function');
}
// 渐隐切换类
var FadeLoopImg = function(imgArr , container ,arrow){
    LoopImages.call(this , imgArr , container);
    this.arrow = arrow;
}
FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage = function(){
    console.log('FadeLoopImg changeImage function');
}
// 实例化渐隐切换图片类
var fadeImg = new FadeLoopImg([
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg'
],'slide',['left.jpg','right.jpg']);
// 测试用例
console.log(fadeImg.container); // slide
fadeImg.changeImage();

LoopImages.prototype.getImageLength = function(){
    return this.imageArray.length;
}
FadeLoopImg.prototype.getContainer = function(){
    return this.container;
}
console.log(fadeImg.getImageLength());
console.log(fadeImg.getContainer());