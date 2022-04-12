const PENDING = 0
const FULFILED = 1  
const REJECTED  = 2

function customPromise(executor){
  let state = PENDING
  let value = null
  let handlers  = []
  let catchers  = []
  
  function resolve(result){
    if(state !== PENDING) return

    state = FULFILED
    value =  result

    handlers.forEach((h)  =>  h(value))
  }

  function reject(err){
    if(state!==PENDING) return

    state = REJECTED
    value = err  

    catchers.forEach((c)  =>  c(value))
  }

  this.then = function(successcallback){
    if(state===FULFILED){
      successcallback(value)
    }
    else{
      handlers.push(successcallback)
    }
  }

  this.catch  = function(failurecallback){
    if(state  === REJECTED){
      failurecallback(value)
    }
    else{
      catchers.push(failurecallback)
    }
  }

  executor(resolve, reject)

}

const doWork  = (res, rej)  =>  {
  if(2==2){
    setTimeout(()  =>{
      
    })
  }
}