 // 获取事件对象
 var getEvent = function(event){
     // 标准浏览器返回 event, IE 下 window.event
     return event || window.event;
 }
 // 获取元素
 var getTarget = function(event){
     var event = getEvent(event);
     // 标准浏览器下event.target , IE 下 event.srcElement
     return event.target || event.srcElement;
 }
 // 组织默认行为
 var preventDefault = function(event){
     var event = getEvent(event);
     // 标准浏览器
     if(event.preventDefault){
         event.preventDefault();
     }else{
         // IE 浏览器
         event.returnValue = false;
     }
 }
 function hideInputSug(){
     console.log('hideInputSug');
 }
 document.onclick = function(e){
     // 组织默认行为
     preventDefault(e);
     // 获取事件源对象
     if(getTarget(e)!== document.getElementById('myInput')){
         hideInputSug();
     }
 }