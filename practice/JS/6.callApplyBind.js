// ! CALL FUNCTION

let person1 = {
  name : 'Adam',
  age: 25,
  // showDetails = function(){
  //   console.log(this.name + ' is ' +this.age + ' years old');
  // }
} 



let person2 = {
  name : 'steve',
  age : 20
};

// person1.showDetails();
// person1.showDetails.call(person2);  // Function Borrowing


// let showDetails = function(){
//   console.log(this.name + ' is ' +this.age + ' years old');
// }
let showDetails = function(city, car){
  console.log(`${this.name} is ${this.age} years old, he lives in ${city} and he drives ${car}`);
}


// showDetails.call(person1, "Noida", "BMW")
// showDetails.call(person2, "Delhi", "Mercedes")

// for apply we have to pass it as a array
// showDetails.apply(person2, ['Delhi', 'Mercedes'])


let showDetailBind = showDetails.bind(person2,'noida', 'BMW');
showDetailBind();
// 