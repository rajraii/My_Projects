import React from 'react'
// import img from '../images/1.jpg'
export default function Card(props) {

  let badgetext;
  if(props.openspots===0) badgetext="Sold Out"
  else if(props.openspots==="Online") badgetext= "Online"

  return (
    <div className='Card'>
      {badgetext && <div className="card--sold">{badgetext}</div> }
      <img src={props.image} alt="human" className='Card--img'/>
      <div className="Card--status">
        <span>{props.rating}</span>
        <span>({props.num})</span>
        <span id='grey'>{props.country}</span>
      </div>
      <p>{props.desc}</p>
      <p><strong> From ${props.price}</strong> / person</p>
    </div>
  )
}
