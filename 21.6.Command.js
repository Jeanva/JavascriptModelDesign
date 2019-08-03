// 产品展示数据
var productData = [
    { 
        src:'command/02.jpg',
        text:'绽放的桃花'
    },{
        src:'command/03.jpg',
        text:'阳光下的温馨'
    },{
        src:'command/04.jpg',
        text:'镜头前的绿色'
    }
],
// 模块标题数据
titleData = {
    title :'夏日里的一片温馨',
    tips:'暖暖的温情带给人们家的感受。'
};
viewCommand({
    command:'display',
    param:['title',titleData,'title']
});
viewCommand({
    command : 'create',
    // 详见 create 方法参数
    param : [{
        src:'command/01.jpg',
        text: '迎着朝阳的野菊花'
    },'product']
});
viewCommand({
    command : 'display',
    param:['product',productData,'product']
})