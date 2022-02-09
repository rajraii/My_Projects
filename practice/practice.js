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

// const obj =  {
//   myAge: 21,
//   myName :() => {
//     console.log(this);
//   },
// }

// obj.myName();
// let myName= "Raj";
// let myBioData= {
//   [myName] : "Hello How are you?  ",
//   // [myLname] : 'Rai',
//   // 21 : "is my age",
//   // myDegree : 'btech'
// };

// console.log(myBioData);

// for(let i=1 ;i<=20 ;i++){
//   if(i%3==0 && i%5==0) console.log(i," : FizzBuzz");
//   else if(i%3==0) console.log(i,": Fizz");
//   else if (i%5==0) console.log(i,": Buzz");
//   else console.log(i);
// }

// let low=1, high=10;
// for(let num =low ; num<=high;num++){
//   let flag=false;
//   for(let a=2;a<num;a++){
//     if(num%a==0) {
//      flag=true;
//      break; 
//     }
//   }
//   if(!flag) console.log(num);
// }

// function fib (n){
//   if(n==0 || n==1) return 1;
//   return fib(n-1) + fib(n-2); 
// }

// const num= fib(5);
// console.log(num);
// let string = "";
// for ( let num=0; num<=5; num++){
//   for(let space = 5-num-1; space>=1; space--) string += " ";
//   for(let star = 0; star<= num;star++) string += "*";
//   string +="\n";
// }

// console.log(string);

// let num =13;
// let bin =0, i=1;
// while(num>=1){
//   let y=num%2;
//   bin = bin + y*i 
//   num=parseInt(num/2);
//   i=i*10;
// }
// console.log(bin);

// let arr = [1,2,3,4,5];
// let narr = arr.reverse();
// console.log(narr);

// let arr1 = [1,2,3];
// let arr2= [100,2,1,10];
// let output;
// while (arr1.length){
//   output.push(arr1.pop());
// }
// while(arr2.length){
//   output.push(arr2pop());
// }
// console.log(output);
// function union ( arr1, arr2)
// {
// let obj ={};
// for(let num = arr1.length-1; num>=0; num--) obj[arr1[num]]= arr1[num];
// for(let num = arr2.length-1; num>=0; num--) obj[arr1[num]]= arr2[num];
// let res=[];
// for( var n in obj){
//   if(obj.hasOwnProperty(n))
//     res.push(obj[n]);
// }
// return res
// }
// console.log(union([1,2,3], [100,2,1,10]));

// function abc() {
//   if(1){
//   var a=5;
//   let b= 6;
//   const c = 7;
//   }
//   console.log(a)
//   console.log(b)
//   console.log(c)

// }
// abc();

// console.log(arr);
// let i= 0;
// while(i<arr.length){
  //   console.log(`elem at index at i : ${arr[i]}`);
  //   i++;
  // }
  
  // arr.push(6);
  // arr.unshift(0);
  // console.log(arr);
  
// let arr = [1,2,3,4,5];
// let arr1=arr.splice(2,10);
// console.log(arr1);


// for(let i = 0; i<3;i++){
//   setTimeout(()=>console.log(i))
// }

// function union (arr1, arr2){
//   let res=[];
//   let obj={};
//   for(let i=arr1.length-1;i>=0;i--) obj[arr1[i]]=arr1[i];
//   for(let i=arr2.length-1;i>=0;i--) obj[arr2[i]]=arr2[i];
//   for(let n in obj){
//     res.push(obj[n]);
//   }
//   return res;
// }
// console.log(union([1,2,3], [100,2,1,10]));

function sum (arr) {
  return arr.reduce((a,b) => a+b,0)
};

var res= sum(arr1) + sum(arr2);
console.log(res);