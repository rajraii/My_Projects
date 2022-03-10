// function add(a,b){
//   console.log(a+b);
// }

// let addwith = add.bind(this);
// addwith(4)


// ! Closure Curry

// function add(x){
//   return function(y){
//     console.log(x+y);
//   }
// }

// let addwith =add(2);
// addwith(3);

let person1 =  {
  name: "Raj",
  age: 20
}

function showdetail(city, car){
  console.log(`His name is ${this.name} and his age is ${this.age}, he is in ${city} and drives ${car}`);
}

Function.prototype.myBind = function(...args){
  let obj = this;
  let param = args.splice(1);
  return function(){
    obj.apply(args[0], param);
  }
}

let showdetailmybind = showdetail.myBind(person1, 'Noida', 'UP');
showdetailmybind();