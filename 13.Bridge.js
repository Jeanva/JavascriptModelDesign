var spans = document.getElementsByTagName('span');
// 为用户名绑定特效
spans[0].onmouseover = function(){console.log(this);
    this.style.color = 'red';
    this.style.background = "#ddd";
};
spans[0].onmouseout = function(){
    this.style.color = '#333';
    this.style.background = "#f5f5f5";
};
// 为等级绑定特效
spans[1].onmouseover = function(){console.log(this.getElementsByTagName('strong')[0]        );
    this.getElementsByTagName('strong')[0].style.color='red';
    this.getElementsByTagName('strong')[0].style.background = '#ddd';
};
spans[1].onmouseout = function(){
    this.getElementsByTagName('strong')[0].style.color='#333';
    this.getElementsByTagName('strong')[0].style.background = "#f5f5f5";
}