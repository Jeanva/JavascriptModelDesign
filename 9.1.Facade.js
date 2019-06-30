document.onclick = function(e){
    e.preventDefault();
    if(e.target !== document.getElementById('myinput')){
        hidePageAlert();
    }
}
function hidePageAlert(){
    // 隐藏显示框
    alert('myinput 被触发');
    console.log('myinput 被触发了');
}
