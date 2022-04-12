import React, { useState } from 'react'

const Form = () => {

  const [email, setemail] = useState("")
  const [Password, setPassword] = useState("")
  const [allEntry, setAllEntry] = useState([])

  const submitForm = (e) => {
    e.preventDefault()
    const newEntry = { id: new Date().getTime().toString(),email, Password };

    setAllEntry(...allEntry, newEntry);
    setemail("");
    setPassword("");
  }

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email"
            name='email'
            id='email'
            autoComplete='off'
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="Password">Password</label>
          <input type="text"
            name='email'
            id='email'
            autoComplete='off'
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" >Submit</button>

      </form>

      <div>
        {
          allEntry.map((curr) =>  {
            const {id, email, Password} =curr
            return (
              <div key={id}>
                <p>{email}</p>
                <p>{Password}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
export default Form;