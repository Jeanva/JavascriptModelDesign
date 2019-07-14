var vdata = {
    content:'测试弹窗',
    success:'成功了',
    fail:'失败了'
};
// 右侧按钮提示框
var RightAlert = function(data){
    // 继承基本提示框构造函数
    Alert.call(this,data);
    // 为确认按钮添加 right 类设置位置居右
    this.confirmBtn.className = this.confirmBtn.className +'right';
}
// 继承基本提示框方法
RightAlert.prototype = new Alert();

var rightAlert = new RightAlert(vdata); //实例化 RightAlert的 属性和方法
// rightAlert.init();

// 标准提示框
var TitleAlert = function(data){
    // 继承基本提示框构造函数
    Alert.call(this, data);
    // 设置标题内容
    this.title = data.title;
    // 创建标题组件
    this.titleNode = document.createElement('h3');
    // 标题组件中写入标题内容
    this.titleNode.innerHTML = this.title;
}
// 继承基本提示框方法
TitleAlert.prototype = new Alert();
// 对基本提示框创建方法拓展
TitleAlert.prototype.init = function(){
    // 插入标题
    this.panel.insertBefore(this.titleNode, this.panel.firstChild);
    // 继承基本提示框 init 方法
    Alert.prototype.init.call(this);
}
var vdata2 = {
    content:'测试弹窗',
    success:()=>(console.log('成功了')),
    fail:()=>(console.log('失败了')),
    title:'我是标题'
};
var titleAlert = new TitleAlert(vdata2);
// titleAlert.init();


// 章节作业 实现右侧取消按钮提示框
var RightCancelAlert = function(data){
    Alert.call(this,data);
    this.closeBtn.className =this.closeBtn.className+ 'right';
}
RightCancelAlert.prototype = new Alert();
var workData = {
    content:'作业右侧取消按钮提示框',
    title:'我是标题',
    success:()=>(console.log('成功')),
    fail:()=>console.log('失败了，取消！')
}
var rightCancel = new RightCancelAlert(workData);
rightCancel.init();