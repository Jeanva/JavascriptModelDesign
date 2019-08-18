
window.onload = function(){
    var canvas = document.getElementsByTagName('canvas')[0], // 获取画布
        img = document.images[0],                           // 获取图片
        width = (canvas.width = img.width *2)/2,            // 获取并设置宽度
        height = canvas.height = img.height,                // 获取并设置高度
        ctx = canvas.getContext('2d');                      // 获取并渲染上下文
    ctx.drawImage(img,0,0); 
    // 绘制特效图片

            function dealImage(t,x,y,w,h,a){
                var canvasData = ctx.getImageData(x,y,w,h),
                    data = canvasData.data;
                // 状态模式封装算法
                var Deal = function(){
                    var method = {
                        //  默认类型 —— 平均灰度特效
                        'default' : function(i){
                            return method['gray'](i);
                        },
                        // 红色特效
                        'red': function(i){
                            data[i+1]=0;
                            data[i+2]=0;
                            data[i+3]=a;
                        },
                        // 平均灰度特效
                        'gray' :function(i){//console.log(i);
                            // 将红、绿、蓝色取平均值
                            data[i] = data[i+1] = parseInt(data[i+2] =(data[i] + data[i+1]+ data[i+2]) /3);
                            data[i+3] =a;//console.log(data[i]);
                        }
                    };
                    // 主函数，通过给定类型返回对应滤镜算法
                    return function(type){
                        return method[type] || method['default'];
                    }
                }();
                // 迭代器处理数据
                function eachData(fn){
                    for(let i = 0,len=data.length;i<len;i+=4){
                        // 处理一组像素数据
                        fn(i);
                    }
                }
                // 处理数据
                eachData(Deal(t));
                ctx.putImageData(canvasData,width+x,y);
            };

        // 为图片添加特效
    dealImage('gray',0,0,width,height,255);
    dealImage('gray',100,50,300,200,100);
    dealImage('gray',150,100,200,100,255);
}