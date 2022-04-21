import React, { useState } from 'react'
import MemeData from '../memeData'


export default function Form() {

  const [Img, setImg] = useState("")

  const getMeme = () => {
    const memeArray = MemeData.data.memes
    // const id = Math.floor(Math.random() * memeArray.length)
    const id = Math.floor(Math.random() * memeArray.length)
    setImg(memeArray[id].url)
  }

  return (
    <div>
      <form action="" className='form'>
        <input
          type="text"
          className='form--input'
          placeholder='top-text'
        />
        <input
          type="text"
          placeholder='bottom-text'
          className='form--input'
        />
        <button onClick={() => getMeme}>
          Get a New Meme 🖼️
        </button>
      </form>
      <img src={Img} alt="" />
    </div>
  )
}
