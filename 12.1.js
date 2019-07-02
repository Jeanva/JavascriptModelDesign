// 输入框元素
var telInput = document.getElementById('tel_input');
// 输入格式提示文案
var telWarnText = document.getElementById('tel_warn_text');
// 输入框提示输入文字
var telDemoText = document.getElementById('tel_demo_text');
// 点击输入框现实输入框输入格式提示文案
telInput.onclick = function(){console.log(1);
    telWarnText.style.display = 'inline-block';
    telDemoText.style.display = 'none';                     
}
