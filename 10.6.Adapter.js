var arr = ['Javascript','book','前端编程语言','8月1日'];

function arrToObjAdapter(arr){
    return {
        name: arr[0],
        type: arr[1],
        title: arr[2],
        data: arr[3]
    }
}
var adapterData = arrToObjAdapter(arr);
console.log(adapterData);