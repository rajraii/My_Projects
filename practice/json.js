let fs = require("fs");
let buffer = fs.readFileSync("./example.json");
console.log(buffer);
console.log('`````````````````');
let data = JSON.parse(buffer);
console.log(data);
// data.push({


//   "name": "Tony ",
//   "last name": "Roger",
//   "freinds": [
//     "Bruce",
//     "Peter",
//     "Natasha",
//     "Tony Stark"
//   ],
//   "age": "45",
//   "address":{ 
//     "city": "New york",
//     "state": "manhattan"
//   }
// })
// let stringdata=JSON.stringify(data);
// fs.writeFileSync("example.json",stringdata);

// console.log(buffer);
