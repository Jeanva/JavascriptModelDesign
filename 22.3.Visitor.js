function bindIEEvent(dom , type , fn , data){
    var data = data || {};
    dom.attachEvent('on' + type , function(e){
        fn.call(dom ,e ,data);
    })
}