// 格式化字符串方法
function formateString(str , data){
    return str.replace(/\{#(\w+)#}/g, function(match, key){
        return (typeof data[key]) === undefined ? '' : data[key]
    });
}
//  基础导航
var Nav = function(data){
    // 基础导航样式模板
    this.item = '<a href="{#href#}" title="{#title#}">{#name#}</a>';
    // 创建字符串
    this.html = '';
    // 格式化数据
    for(var i=0, len =data.length; i<len ; i++){
        this.html += formateString(this.item ,data[i]);
    }console.log(typeof this.html);
    // 返回字符串数据
    return this.html;
}

// 带有消息提醒信息导航
var NumNav = function(data){
    // 消息提醒信息组件模板
    var tpl = '<b>{#num#}</b>';
    // 装饰数据
    for(var i= data.length-1; i>=0 ;i--){
        data[i].name += data[i].name + formateString(tpl,data[i]);console.log(JSON.stringify(data[i].name));
    }
    // 继承基础导航类，并返回字符串
    console.log(typeof data);
    return Nav.call(this,data);
}

// 带有连接地址的导航
var LinkNav = function(data){
    // 连接地址模板
    var tpl = '<span>{#link#}</span>';
    // 装饰数据
    for(var i = data.length-1; i>=0; i--){
        data[i].name += data[i].name + formateString(tpl,data[i]);console.log(data[i].name);
    }
    // 继承基础导航类，并返回字符串
    return Nav.call(this,data);
}

// 16.9 创建导航

// 获取导航容器
var nav = document.getElementById('content');
// 添加内容
nav.innerHTML = new NumNav([
    { href:'http://www.baidu.com',
    title:'百度一下，你就知道',
    name:'百度',
    num: '10'
    },
    {href:'http://www.taobao.com',
    title:'淘宝',
    name:'淘宝',
    num:'2'
    },
    {href:'http://www.qq.com',
    title:'腾讯首页',
    name:'腾讯',
    num:'3'
    }
]).html;

let s = new NumNav([
    { href:'http://www.baidu.com',
    title:'百度一下，你就知道',
    name:'百度',
    num: '10'
    },
    {href:'http://www.taobao.com',
    title:'淘宝',
    name:'淘宝',
    num:'2'
    },
    {href:'http://www.qq.com',
    title:'腾讯首页',
    name:'腾讯',
    num:'3'
    }
]);

for(let i in s){
    console.log(s[i]);
}
console.log(nav.innerHTML);