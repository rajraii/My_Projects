// * Ecmascript == profound Javascript

// for (let num = 0; num <= 10; num++) {
//   let tableof=12;
//   console.log(`${tableof} * ${num} = ${tableof * num}`);
// }


// * 1 Defualt parameter : when we expect a parameter and dont provide, to avoide NaN case
// func sum(a,b=5);

// * 2 Fat Arrow Functionnn

// * console.log(sum());
//  It will not run, normal js was running but this not coz you have to first initialise in fat arrow pointer
// const sum= () => 'the sum of two integer is  ${(a=5) + (b=10)}';

// console.log(sum());

//{
//   // let a=5; b=10;
//   // let sum=a+b;
//   // return `the sum of twp integer is ${sum}`;
//   // return `the sum of twp integer is ${a+b}`;
//   // return `the sum of twp integer is ${(a=5)+(b=10)}`;
//   'the sum of two integer is ${(a=5) + (b=10)}';  // undefined
// }

// 3 * Arrays

// var names=['raj', 'kishan', 'papa'];
// for(let elements in names)
//   console.log(elements);
//   // output: 0 1 2

// for ( let i of names)
//   console.log(i);
//   // output: raj kishan papa

// names.forEach(function (element, index, array) {
//   console.log(element + "index : " + index + " " );
// });

// * 3.1 Searching and Filtering in Array

//  indexof returns the index of the element ,if found none it return -1,
// it also retraverse the array if you provide the index in between the array

// var my=["raj","rai","mayank","rai"];

// console.log(my.indexOf("rai",2));

// * 3.2 Last index does backward search everything is same as index of

// * 3.3 Includes fuction returns if a element includes the element you gave

//  * 3.4 Find function // It returns the first occurence only and in case of none find it returns undefined
// const price=[100,200,300,400];
// const findelem= price.find((element)=>{
//   return element<300;
// })
// console.log(findelem);
// alternative
// console.log( price.find((element)=> element<200) );
// ! fault is that it only returns the single value which satisfiew not all

// * 3.6 Filter
//  Q- To find all element price below 200
// const price=[100,2000,150,119,400];
// const ans=price.filter((elem) => elem<200);
// const ans1=price.findIndex((elem) => elem<200);
// console.log(ans);
// console.log(ans1);

// * 3.6 Sort A array
// Sorts the array
// ! It converts number to string and then sort which provides wrong sorting in case of numbers
// const months=[20,5,9,-100];
// console.log(months.sort())

// 3.7 push
// it pushes the new element into the last of array and return the new length

// 3.8 unshift
// it pushes the element in fornt of element
// const aa=[1,2,3];
// aa.unshift(0)
// console.log(aa);

// 3.8 pop
// it removes the data from array;

// 3.9 Shift 
//  it shifts the order of element

// 3.10 Spilce
// Add and remove or elements from array
// It returns empty array in case of addition and removed element in deletion

// Addition '0'
// for adding 3 attributes should be given -> index, if delete or addition, element to be added
// const aa=[1,2,3,4];
// aa.splice(aa.length,0,5);
// console.log(aa);

// Deletion '1'
// for deletion we provide 2 attribuyte-> index, '1'
// const aa=[1,2,3];
// aa.splice(1,1);
// console.log(aa);

// Updation
// we provide 3 attribute -> indexo, 1, updated element
// const aa=[1,2,3];
// const index=aa.indexOf(2);
// if(index!= -1){
//   aa.splice(index,1,100)
// }
// console.log(aa);
// infinity - If we give infinity in splice it wil delete all element after the given index

// 3.11 Map
// Returns a new array containing 
// the results of calling a funcction on every element

const aa=[1,4,9,16,25];
// num> 9;
// let a=aa.map((curr, index, arr)=> {return curr>9;})
// console.log(aa);

let a=aa.map((curr,index,arr)=> {
  return (curr>9) ? curr : 0;
}) 
console.log(a);
// aa.forEach(element => {
//   if(element>9)  console.log(element) ;
// });