// setTimeout(()=>{
//   console.log(1);
// })
// setTimeout(()=>{
//   console.log(2);
// })
// let p = new Promise((res, rej) => {
//   res()
// })
// console.log(3);

// p.then(()=>{
//   console.log(4);
// })
// p.then(()=>{
//   console.log(5);
// })
// setTimeout(()=>{
//   console.log(6);
// })

// async function inc(x){
//   x= x + await 1;
//   return x; 
// }

// async function increment(x){
//   x = x+1;
//   return x;
// }

// inc(1).then((x)=>{
//   increment(x).then((x)=>{ //()
//     console.log(x);
//   })
// }) 

// let p = new Promise (function(resolve, reject){
//   reject(new Error("some Error"))
//   setTimeout(()=>{
//     reject(new Error("some Error"))
//   },1000)
//   reject(new Error("some Error"))
// })

// p.then(null, function(err){
//   console.log(1);
//   console.log(err);
// }).catch(function (err){
//   console.log(2);
//   console.log(err);
// })

// function resolveAfterNSeconds(n, x) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(x);
//     }, n);
//   });
// }

// (function () {
//   let a = resolveAfterNSeconds(1000, 1)
//   a.then(async function (x) {
//     let y = await resolveAfterNSeconds(2000, 2)
//     let z = await resolveAfterNSeconds(1000, 3)

//     let p = resolveAfterNSeconds(2000, 4)
//     let q = resolveAfterNSeconds(1000, 5)
//     console.log(x + y + z + await p + await q);
//   })
// })()


for(let i=0; i<3; i++){
  setTimeout(()=>{
    console.log(i);
  },1000)
}