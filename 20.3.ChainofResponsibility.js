/* 异步请求对象（简化版本） 
   参数data         请求数据
   参数 dealType    响应数据处理对象
   参数 dom         事件源
*/
var sendData = function(data, dealType, dom){
    // XHR 对象 简化版本 IE 另行处理
    var xhr = new XMLHttpRequest(),
    // 请求路径
    url ='http://127.0.0.1:3001/chain';
    // 请求返回事件
    xhr.onload = function(event){
        // 请求成功
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
            dealData(xhr.responseText , dealType , dom);
        } else {
            // 请求失败
        }
    };
    // 拼接请求字符串
    // for(var i in data){
    //     url += '&' + i + '=' + data[i];
    // }
    // 发送异步请求
    xhr.open('get',url,true);
    xhr.send(null);
}