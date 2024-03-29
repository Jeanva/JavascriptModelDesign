// 原型模式
// 图片轮播类
var LoopImages = function(imgArr, container){
    this.imageArray = imgArr;
    this.container = container;
    this.createImage = function(){}
    this.changeImage = function(){}
}

// 上下滑动切换类
var SlideLoopImg = function(imgArr , container){
    // 构造函数继承图片轮播图
    LoopImages.call(this, imgArr , container);
    // 重写继承的切换下一张图片方法
    this.changeImage = function(){
        console.log('SlideLoopImg changeImage function');
    } 
}
// 渐隐切换类
var FadeLoopImg = function(imgArr , container , arrow){
    LoopImages.call(this, imgArr, container);
    // 切换箭头私有变量
    this.arrow = arrow;
    this.changeImage = function(){
        console.log('FadeLoopImg changeImage function');
    }
}
// 实例化一个渐隐切换图片类
var fadeImg = new FadeLoopImg([
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg'
],'slide',['left.jpg','right.jpg']);
fadeImg.changeImage();      // FadeLoopImg changeImage function

