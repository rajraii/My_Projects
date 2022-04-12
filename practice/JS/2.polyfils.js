// Array.prototype

let myArr = [1,2,3,4,5];

let sqarredArr = myArr.map( x => {
  return x*x;
});

// console.log(sqarredArr);

// custom map

function mypolyfillMap( arr, cb) {
  let newArr = [];
  for(let i=0; i<arr.length ; i++){
    newArr.push(cb(arr[i]));
  }
  return newArr;
}

function square(x){
  return x*x;
}

console.log(mypolyfillMap(myArr, square))
