// 100 返 30
function return30(price){
    this.price = price(1-0.3);
    console.log('return30',this.price);
    return this.price;
}
// 100 返 50
function return50(price){
    this.price = price(1-0.5);
    console.log('return50',this.price);
    return this.price;
}
// 9折
function percent90(price){
    this.price = price*0.9;
    console.log('percent90',this.price);
    return this.price;
}