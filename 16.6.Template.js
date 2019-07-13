// 带有取消按你的弹出框
var CancelAlert = function(data){
    // 继承标题提示框构造函数
    TitleAlert.call(this, data);
    // 取消按钮文案
    this.cancel = data.cancel;
    // 创建取消按钮
    this.cancelBtn = document.createElement('span');
    // 为取消按钮添加类
    this.cancelBtn.className = 'cancel';
    // 设置取消按钮内容
    this.cancelBtn.innerHTML = this.canacel || '取消';
}
// 继承标题提示框原型方法
CancelAlert.prototype = new Alert();
CancelAlert.prototype.init = function(){
    // 继承标题提示框创建方法
    TitleAlert.prototype.init.call(this);
    this.panel.appendChild(this.cancelBtn);
}
CancelAlert.prototype.bindEvent = function(){
    var me = this;
    // 标题提示框绑定事件方法继承
    TitleAlert.prototype.bindEvent.call(me);
    // 取消按钮绑定事件
    this.cancelBtn.onclick = function(){
        // 执行取消回调函数
        me.fail();
        me.hide();
    }
}
var data1 = {
    content:'取消对话框',
    success:function(){console.log('成功了')},
    fail:function(){console.log('失败了')},
    title:'标题'
}
var cancelAlert = new CancelAlert(data1);
// cancelAlert.init();