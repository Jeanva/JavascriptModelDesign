var Base = function(){
    this.children = [];
    this.element = null;
}
Base.prototype = {
    init: function(){ throw new Error('请重写你的方法')},
    add: function(){ throw new Error('请重写你的方法')},
    getElement: function(){ throw new Error('请重写你的方法')}
}

var FormItem = function(id, parent){
    Base.call(this);
    this.id = id;
    this.parent = parent;
    this.init();
}
inheritPrototype(FormItem,Base);
FormItem.prototype.init= function(){
    this.element = document.createElement('ul');
    this.element.id = this.id;
    this.element.className = 'new-FormItem';
};
FormItem.prototype.add = function(child){
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}
FormItem.prototype.getElement = function(){
    return this.element;
}
FormItem.prototype.show = function(){
    this.parent.appendChild(this.element);
}

var FieldsetItem = function(id,text){
    Base.call(this);
    this.id = id;
    this.text = text
    this.init();
}
inheritPrototype(FieldsetItem,Base);
FieldsetItem.prototype.init = function(){
    this.element = document.createElement('li');
    this.element.id = this.id;
    this.element.innerHTML = this.text;
}
FieldsetItem.prototype.add = function(child){
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}
FieldsetItem.prototype.getElement=function(){
    return this.element;
}

var Group = function(classname){
    Base.call(this);
    this.className = classname||'';
    this.init();
}
inheritPrototype(Group,Base);
Group.prototype.init = function(){
    this.element = document.createElement('div');
    this.element.className = this.className;
}
Group.prototype.add = function(child){
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}
Group.prototype.getElement = function(){
    return this.element;
}

// 成员类
var InputItem = function(id){
    Base.call(this);
    this.id = id ||'';
    this.init();
}
inheritPrototype(InputItem,Base);
InputItem.prototype.init = function(){
    this.element = document.createElement('input');
    this.element.id = this.id;
}
InputItem.prototype.add = function(){};
InputItem.prototype.getElement = function(){
    return this.element;
}
var LabelItem = function(id,text){
    Base.call(this);
    this.id = id ||'';
    this.text = text;
    this.init();
}
inheritPrototype(LabelItem,Base);
LabelItem.prototype.init=function(){
    this.element = document.createElement('label');
    this.element.id = this.id;
    this.element.innerHTML = this.text;
}
LabelItem.prototype.add = function(){};
LabelItem.prototype.getElement = function(){
    return this.element;
}

var SpanItem = function(id){
    Base.call(this);
    this.id = id;
    this.init();
}
inheritPrototype(SpanItem,Base);
SpanItem.prototype.init=function(){
    this.element = document.createElement('span');
    this.element.id = this.id;
}
SpanItem.prototype.add = function(){}
SpanItem.prototype.getElement = function(){
    return this.element;
}

var TextareaItem = function(classname){
    Base.call(this);
    this.className = classname;
    this.init();
}
inheritPrototype(TextareaItem,Base);
TextareaItem.prototype.init = function(){
    this.element = document.createElement('textarea');
    this.element.className = this.className;
}
TextareaItem.prototype.add = function(){}
TextareaItem.prototype.getElement = function(){
    return this.element;
}

var form = new FormItem('FormItem',document.body);
form.add(
    new FieldsetItem('account','账号').add(
        new Group().add(
            new LabelItem('user_name','用户名:')
        ).add(
            new InputItem('user_name')
        ).add(
            new SpanItem('4到6位数字或字母')
        )
    ).add(
        new Group().add(
            new LabelItem('user_password','密&emsp;码:')
        ).add(
            new InputItem('user_password')
        ).add(
            new SpanItem('6到12位数字或密码')
        )
    )
).show();