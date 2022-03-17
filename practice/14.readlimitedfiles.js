const fs = require('fs').promises

console.log('before');

let arr= ['./1.txt', './2.txt', './3.txt']

for(let i=0; i<arr.length; i++){
  let fileread = fs.readFile(arr[i]);
  fileread.then(cb)
}

function cb(data){
  console.log('' + data);
}

console.log('after');