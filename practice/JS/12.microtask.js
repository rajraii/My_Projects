console.log('Program Starts');

setTimeout(() =>{
  console.log('I am set Time out');
},1000)

Promise.resolve().then((val)  =>{
  console.log('Promise Output');
})

console.log('Program Ends');

 