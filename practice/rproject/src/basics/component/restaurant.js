
// import React from 'react'

// import react from "react";

// // const App = () => {
// //   return <div>Hello world!</div>
// // } 

// const App = () => {
//   return (
//   // <div>
//   //   <h1> hello world !</h1>
//   //   <p>Awesome</p>
//   // </div>
//     <>
//       <myName />
//       <myName />
//       <h1 className ='myclassname'>Hello world</h1>
//       <p>Awesome hu mai</p>
//     </>
//   );
// };

// const myName = () => {
//   return <h1> raj rai</h1>;
// };

// export default App

import React from 'react'
import "./component/style.css"
const restaurant = () => {
  return <>
    <div className='card-container'>
      <div className='card'>
        <div className="card-body">
          <span className="card-number">1</span>
          <span className="card-author subtle" /*style={{color :"red"}}*/ > BreakFast</span>
          <h2 className="card-title"> Maggi</h2>
          <span className="card-description subtle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolore dolor quis unde dolorem aspernatur.
          </span>
          <div className="card-read">Read</div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </>
}
export default restaurant;

