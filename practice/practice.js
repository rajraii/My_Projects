// var area="circle";
// var pi= 3.14, l=5,b=4,r=3;
// switch (area) {
//   case 'circle':
//     console.log(pi*r**2);
//     break;
//   case 'rectangle':
//       console.log(l*b);
//   default:
//     break;
// }

// ! Challenge

// for(var num=1; num<=50;num++)
//   console.log("8 * "+ num + "= "+ num*8);

// ! Functions
// function sum(){
//   let a=5, b=10;
//   console.log(a+b);
// }
// sum();
// console.log(sum());


// for (var num=1; num<=10; num++){
//   var tableof= 8;
//   console.log(tableof +" * "+num +" = " +num*tableof);
// }

// function sum(a,b) {
//   var total = a+b;
//   console.log(total);
// }

// sum();
// sum(10, 20);
// sum(40,50);

// function multi(a,b=5){
//   return a*b;
// }
// console.log(multi(3));


// var arr = ["raj",3,"name","yo"]
// for(let i in arr){
//   console.log(i);
// }
// for (const i of arr) {
//   console.log(i);
// }
// arr.forEach((i,index,array) => {
//   console.log(`${i} index at : ${index}`);
// });

// const price = [100,200,300,400,500,600];

// const findelem = price.splice(5,1,900);
// console.log(price);

const price = [2,3,4,6,8];

let newprice = price.map((curr) =>curr*2).filter((curr) =>  curr>10).reduce((accumulator, curr) => {
  return accumulator+=curr;
});

console.log(newprice);