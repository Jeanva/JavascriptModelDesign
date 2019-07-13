// 模板类 基础提示框 data 渲染数据
var Alert = function(data){
    // 如果没有数据则返回，防止后面程序执行
    if(!data) return ;
    // 设置内容
    this.content = data.content;
    // 创建提示框面板
    this.panel = document.createElement('div');
    // 创建提示内容组件
    this.contentNode = document.createElement('p');
    // 创建确定按钮组件
    this.confirmBtn = document.createElement('span');
    // 创建关闭按钮组件
    this.closeBtn = document.createElement('b');
    // 为提示框面板添加类
    this.panel.className = 'alert';
    // 为关闭按钮添加类
    this.closeBtn.className = 'a-close';
    // 为确定按钮添加类
    this.confirmBtn.className = 'a-confirm';
    // 为确定按钮添加文章
    this.confirmBtn.innerHTML = data.confirm || '确认';
    // 为提示内容添加文本
    this.contentNode.innerHTML = this.content;
    // 点击确定按钮执行方法 如果data 中有success 方法则 success 方法，否则为空函数
    this.success = data.success || function(){};
    // 点击关闭按钮执行方法
    this.fail = data.fail || function(){};
}
// 提示框原型方法
Alert.prototype = {
    // 创建方法
    init: function(){
        // 生成提示框
        this.panel.appendChild(this.contentNode);
        this.panel.appendChild(this.closeBtn);
        this.panel.appendChild(this.confirmBtn);
        // 插入页面中
        document.body.appendChild(this.panel);
        // 绑定事件
        this.bindEvent();
        // 显示提示框
        this.show();
    },
    bindEvent : function(){
        var me = this;
        // 关闭按钮点击事件
        this.closeBtn.onclick = function(){
            // 执行关闭取消方法
            me.fail();
            // 隐藏弹层
            me.hide();
        }
        this.confirmBtn.onclick = function(){
            // 执行关闭确认方法
            me.success();
            // 隐藏弹层
            me.hide();
        }
        
    },
    // 隐藏弹层方法
    hide: function(){
        this.panel.style.display = 'none';
    },
    // 显示弹层方法
    show: function(){
        this.panel.style.display = 'block';
    }
}