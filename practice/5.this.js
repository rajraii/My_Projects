// This operator


// In non strict modethis operator returns a non empty object
// console.log(this);

// in a function, this operator returns a global object
// function showThis(){
//   console.log(this);
// }
// showThis();

// this operator in a function in object, returns the object itself
// let obj = {
//   name : 'adam',
//   f : function(){
//     console.log(this);
//   }
// }

// obj.f();



// returns gloabl object
// let obj = {
//   name: 'adam',
//   f: function () {
//     function g(){
//       console.log(this);
//     }
//     g();
//   }
// }

// obj.f();

// 'use strict'

// console.log(this); - return {}

// function a (){ - returns undefined
//   console.log(this);
// }
// a();

// obj{funct} - returns object itself

// obj{func(func)} - returns undefined

