
// function add () {
//   let a= 4;
//   function addChild  ()  {
//     console.log(a +5);
//   }
//   return addChild;
// }

// let catchadd = add();
// console.log(catchadd);

Array.prototype.myFunction = function () {
  console.log(this);
}

let arr = [1,3,5,7];

arr.myFunction();