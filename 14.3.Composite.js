var News = function(){
    // 子组件容器
    this.children =[];  // 特权变量
    // 当前组件元素
    this.element = null;    // 特权变量
}
News.prototype = {
    init: function(){ throw new Error('请重写你的方法')},
    add: function(){ throw new Error('请重写你的方法')},
    getElement: function(){ throw new Error('请重写你的方法')}
}

// 14.4 组合要有容器类
// 容器类构造函数
var Container = function(id,parent){
    // 构造函数继承父类
    News.call(this);
    // 模块id
    this.id = id;
    // 模块的父容器
    this.parent = parent;
    // 构建函数
    this.init();
}
// 寄生式继承父类原型方法
inheritPrototype(Container,News);
// 构建方法
Container.prototype.init = function(){
    this.element = document.createElement('ul');
    this.element.id = this.id;
    this.element.className = 'new-container';
};
// 添加子元素方法
Container.prototype.add = function(child){
    // 在子元素容器中插入子元素
    this.children.push(child);
    // 插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;
}
// 获取当前元素方法
Container.prototype.getElement = function(){
    return this.element;
}
// 显示方法
Container.prototype.show = function(){
    this.parent.appendChild(this.element);
}

var Item = function(classname){
    News.call(this);
    this.classname = classname ||'';
    this.init();
}
inheritPrototype(Item,News);
Item.prototype.init = function(){
    this.element = document.createElement('li');
    this.element.className = this.classname;
}
Item.prototype.add = function(child){
    // 在子元素容器种插入子元素
    this.children.push(child);
    // 插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;
}
Item.prototype.getElement = function(){
    return this.element;
}

var NewsGroup = function(classname){
    News.call(this);
    this.classname = classname ||'';
    this.init();
}
inheritPrototype(NewsGroup,News);
NewsGroup.prototype.init = function(){
    this.element = document.createElement('div');
    this.element.className = this.classname;
}
NewsGroup.prototype.add = function(child){
    // 在子元素容器中插入子元素
    this.children.push(child);
    // 插入当前组件元素树种
    this.element.appendChild(child.getElement());
    return this;
}
NewsGroup.prototype.getElement = function(){
    return this.element;
}

// 14.5 创建一个新闻类
var ImageNews = function(url,href,classname){
    News.call(this);
    this.url = url || '';
    this.href = href || '#';
    this.classname = classname || 'normal';
    this.init();
}
inheritPrototype(ImageNews,News);
ImageNews.prototype.init = function(){
    this.element = document.createElement('a');
    var img = new Image();
    img.src= this.url;
    this.element.appendChild(img);
    this.element.className = 'image-news' + this.classname;
    this.element.href = this.href;
}
ImageNews.prototype.add = function(){}
ImageNews.prototype.getElement = function(){
    return this.element;
}
// 基类新闻
var IconNews = function(text,href,type){
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.type = type || 'video';
    this.init();
}
inheritPrototype(IconNews,News);
IconNews.prototype.init = function(){
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = 'icon'+this.type;
}
IconNews.prototype.add = function(){}
IconNews.prototype.getElement = function(){
    return this.element;
}

var EasyNews = function(text,href){
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.init();
}
inheritPrototype(EasyNews,News);
EasyNews.prototype.init = function(){
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = 'text';
}
EasyNews.prototype.add = function(){}
EasyNews.prototype.getElement =function(){
    return this.element;
}

var TypeNews = function(text,href,type,pos){
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.type = type || '';
    this.pos = pos || 'left';
    this.init();
}
inheritPrototype(TypeNews,News);
TypeNews.prototype.init = function(){
    this.element = document.createElement('a');
    if(this.pos ==='left'){
        this.element.innerHTML = '['+this.type+']'+this.text;
    }else{
        this.element.innerHTML =this.text +"["+this.type+"]";
    }
    this.element.href = this.href;
    this.element.className = 'text';
}
TypeNews.prototype.add = function(){};
TypeNews.prototype.getElement = function(){
    return this.element;
}


//14.6 把新闻模块创建出来
var news1= new Container('news',document.body);
news1.add(
    new Item('normal').add(new IconNews('梅西不拿金球奖也伟大','#','video'))
).add(
    new Item('normal').add(new IconNews('保护强国强队用意明显','#','live'))
).add(
    new Item('normal').add(
        new NewsGroup('has-img').add(
            new ImageNews('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562493089859&di=9787504db322bcc1e0a3784d28648076&imgtype=0&src=http%3A%2F%2Fimg1.2345.com%2Fduoteimg%2FqqTxImg%2F2013%2F12%2Fwm%2F20-023937_363.jpg','#','small')
        ).add(
            new EasyNews('从240斤胖子变成型男','#')
        ).add(
            new EasyNews('五大雷人跑步机','#')
        )
    )
).add(
    new Item('normal').add(
        new TypeNews('AK47不愿为费城打球','#','NBA','left')
    )
).add(
    new Item('normal').add(
        new TypeNews('猪头肉','#','CBA','right')
    )
).show();

