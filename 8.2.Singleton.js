var Ming = {
    g : function(id){
        return document.getElementById(id);
    },
    css : function(id,key,value){
        // 简单样式属性 设置
        this.g(id).style[key]= value;   // 在对象中this指代当前对象
    }
}
var A = {
    Util :{
        util_methods1 : function(){ console.log('A.Util.util_methods1');},
        util_methods2 : function(){ console.log('A.Util.util_methods2');}
        // ...
    },
    Tool : {
        tool_method1 : function(){console.log('A.Tool.tool_methods1');},
        tool_method2 : function(){console.log('A.Tool.tool_methods2');}
        //...
    },
    Ajax :{
        get : function(){console.log('A.Ajax.get');},
        post : function(){console.log('A.Ajax.post');}
        //...
    },
    others :{                        
        //..
    }
    //...
}
A.Util.util_methods2();
A.Tool.tool_method1();
A.Ajax.get();