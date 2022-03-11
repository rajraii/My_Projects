// ! Synchronous Callbacks

// function greet(personName,  age, callback,  callback2){
//   let msg = 'Hello '+ personName
//   let personAge=age
//   callback(msg)
//   callback2(age)
// }

// function logGreeting(greeting){
//   console.log(greeting);
// }

// function showAge(age){
//   console.log(age);
// }

// greet('steve', 25, logGreeting, showAge) 


// !  Asynchronous Callbacks

console.log('Hello');

setTimeout(function st1(){
  console.log('I am st1')
},2000)
setTimeout(function st1(){
  console.log('I am st2')
},1000)

function sayBye(){
  console.log('bye');
}

sayBye()



