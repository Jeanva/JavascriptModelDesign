window.onload = function(){
    var canvas = document.getElementsByTagName('canvas')[0], // 获取画布
        img = document.images[0],                           // 获取图片
        width = (canvas.width = img.width *2)/2,            // 获取并设置宽度
        height = canvas.height = img.height,                // 获取并设置高度
        ctx = canvas.getContext('2d');                      // 获取并渲染上下文
    ctx.drawImage(img,0,0); 
    // 绘制特效图片
    // function dealImage(){}
    function dealImage(t,x,y,w,h,a){
        // 获取画布图片数据
        var canvasData = ctx.getImageData(x,y,w,h);
        // 获取像素数据
        var data = canvasData.data;
        // 遍历每组像素数据（4个数据表示一个像素点数据，分别代表红色，绿色，蓝色，透明度）
        for(let i =0,len=data.length;i<len; i+=4){
            switch(t){
                // 红色滤镜 将绿色与蓝色取值为0
                case 'red':
                    data[i+1]=0;
                    data[i+2]=0;
                    data[i+3]=a;
                    break;
                // 绿色滤镜 将红色和蓝色取值为0
                case 'green':
                    data[i] = 0;
                    data[i+2]= 0;
                    data[i+3] =a;
                    break;
                // 蓝色滤镜 将红色和绿色取值为0
                case 'blue':
                    data[i] = 0;
                    data[i+1]=0;
                    data[i+3]=a;
                    break;
                // 平均值灰色滤镜 取三色平均值
                case 'gray':
                    var num = parseInt((data[i]+ data[i+1] + data[i+2])/3);
                    data[i] = num;
                    data[i+1] = num;
                    data[i+2] = num;
                    data[i+3] = a;
                    break;
                // 其他方案
            }
        }
        // 回值处理后的图片
        ctx.putImageData(canvasData,width + x,y);
    }
    // 为图片添加特效
    dealImage('gray',0,0,width,height,255);
    dealImage('gray',100,50,300,200,100);
    dealImage('gray',150,100,200,100,255);
}

/**
 * 回值特效图片
 * param t 特效类型
 * param x x坐标
 * param y y坐标
 * param w 宽度
 * param h 高度
 * param a 透明度
 */
function dealImage(t,x,y,w,h,a){
    // 获取画布图片数据
    var canvasData = ctx.getImageData(x,y,w,h);
    // 获取像素数据
    var data = canvasData.data;
    // 遍历每组像素数据（4个数据表示一个像素点数据，分别代表红色，绿色，蓝色，透明度）
    for(let i =0,len=data.length;i<len; i+=4){
        switch(t){
            // 红色滤镜 将绿色与蓝色取值为0
            case 'red':
                data[i+1]=0;
                data[i+2]=0;
                data[i+3]=a;
                break;
            // 绿色滤镜 将红色和蓝色取值为0
            case 'green':
                data[i] = 0;
                data[i+2]= 0;
                data[i+3] =a;
                break;
            // 蓝色滤镜 将红色和绿色取值为0
            case 'blue':
                data[i] = 0;
                data[i+1]=0;
                data[i+3]=a;
                break;
            // 平均值灰色滤镜 取三色平均值
            case 'gray':
                var num = parseInt((data[i]+ data[i+1] + data[i+2])/3);
                data[i] = num;
                data[i+1] = num;
                data[i+2] = num;
                data[i+3] = a;
                break;
            // 其他方案
        }
    }
    // 回值处理后的图片
    ctx.putImageData(canvasData,width + x,y);
}