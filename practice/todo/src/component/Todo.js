import React, { useState } from 'react'


const Todo = () => {
  
  const Arr = [
    { id: 0, work: "Print all the work" },
    { id: 2, work: 'Help Mommy' },
    { id: 3, work: 'Do the Assignment' },
  ]

  const [myArr, setmyArr] = useState(Arr);

  const clearArr = () => {
    setmyArr([]);
  }

  const remoElem = (id) => {
    const myNewArr = myArr.filter((elem) => {
      return elem.id !== id;
    })
    setmyArr(myNewArr);
  }
  return (
    <>
      {
        myArr.map((curr) => {
          return (
            <div>
              <h1>Task No: {curr.id}</h1>
              <p>{curr.work}</p>
              <button onClick={()=>remoElem(curr.id)} >Remove</button>
            </div>
          )
        })
      }
      <button onClick={clearArr}>Clear</button>
    </>
  )
}

export default Todo;