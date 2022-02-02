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

// const price = [2,3,4,6,8];

// let newprice = price.map((curr) =>curr*2).filter((curr) =>  curr>10).reduce((accumulator, curr) => {
//   return accumulator+=curr;
// },);

// console.log(newprice);

// let fname= "raj";
// let lname= "rai";

// console.log(`${fname} ${lname}`);

// var str= "                            raj rai                  ";

// console.log(str);
// console.log(str.trim())


// console.log(new Date().toLocaleString());
// new Date(Year, month, day, hours, minutes, seconds, milliseconds);

// console.log(Date.now());

// console.log(new Date());

// console.log(Math.PI);

// Objects 

// let bioData= {
//   myName : "Raj",
//   myAge : 21,
//   getData(){
//     console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   },
// }

// bioData.getData();

// let myNames = 'vinod';
// function myName() {
//   console.log(this.myNames);
// }
// myName();

const obj =  {
  myAge: 21,
  myName :() => {
    console.log(this);
  },
}

obj.myName();