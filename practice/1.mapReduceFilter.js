//  Map

let myArr= [1,2,3,4,5];

let newArr = myArr.map( x =>{
  return x*x;
});

console.log(newArr);

//  filter

let filterArr = myArr.filter( x=> {
  return x%2==0;
})

console.log(filterArr);

// Reduce

let sumArr = myArr.reduce( (accumulator, x) => {
  return x + accumulator
}, )

console.log(sumArr);