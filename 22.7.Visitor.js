var a = new Object();
console.log(a.length);
Visitor.push(a,1,2,3,4);
console.log(a.length);
Visitor.push(a,4,5,6);
console.log(a);
console.log(a.length);
Visitor.pop(a);
console.log(a);
console.log(a.length);
Visitor.splice(a,2);
console.log(a);