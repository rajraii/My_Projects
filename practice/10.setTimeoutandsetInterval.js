// function greet(){
//   console.log('hello');
// }

// setTimeout(greet,2000)


// let intervalID
// let counter=0

// function greet(){
//   counter++
//   console.log('hello');
//   if(counter>3){
//     clearInterval(intervalID)
//   }
// }

// intervalID=setInterval(greet,2000)

// !  Setinterval polyfill

function createSetInterval(){
  let intervalID  = 0
  let intervalMap = {}

  function setIntervalPolyfil(callback, delay=0, ...args){
    var id  = intervalID++

    function repeat(){
      intervalMap[id] = setTimeout(() =>  {
        callback(...args)

        if(intervalMap[id]){

        }
      },delay)
    }
    repeat()

    return id
  }

  function clearIntervalPolyfil(intervalID){
    clearTimeout(intervalMap[intervalID])
    delete intervalMap(intervalID)
  }

  return {
    setIntervalPolyfil,
    clearIntervalPolyfil
  }
}

const {
  setIntervalPolyfil,
  clearIntervalPolyfil
} = createSetInterval

let counter =  0
let intervalID

function greeting(){
  counter++
  console.log('Hii');

  if(counter>=3){
    clearIntervalPolyfil()
  }
}

intervalID  =  setIntervalPolyfil(greeting, 2000)

