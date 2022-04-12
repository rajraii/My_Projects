// setTimeout(()=>{
//   console.log(1);
// })
// setTimeout(()=>{
//   console.log(2);
// })
// let p = new Promise((res, rej) => {
//   res()
// })
// console.log(3);

// p.then(()=>{
//   console.log(4);
// })
// p.then(()=>{
//   console.log(5);
// })
// setTimeout(()=>{
//   console.log(6);
// })

// let myFunction = (function x(){
//   let name ;
//   function getName(){
//     return name;
//   } 
//   function setName(newName){
//     name = newName
//   }
//   return {
//     getName : getName,
//     setName : setName
//   }
// })()

// myFunction.setName('Raj');
// console.log(myFunction.name);



// let obj ={
//   name: "Raj",
//   country: "India",
//   state: "Delhi"
// }

// let {name, state, country} = obj

// console.log(name, state, country);


const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];


const arr= users.map((value, idx)=>{
  return value
})

console.log(arr);