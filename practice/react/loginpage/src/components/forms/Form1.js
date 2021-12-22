import React, {useState} from 'react'

export default function Form1({Login,error}) {
  
  const[details, setDetails]= useState({name: "",email :"", password:""});
  
  const SubmitHandle = e =>{
    e.preventDefault();
    Login(details);
  }

  return (
    <form action="" onSubmit={SubmitHandle}>
      <div className="form-inner">
        <h2>Login</h2>
        {(error !== "") ? ( <div className='error'>{error}</div>) : ""}
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input type="text" name='name' id='name' onChange={ e => setDetails({...details, name: e.target.value})} value={details.name}/>
        </div>

        {/* <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name='email' id='email'onChange={ e => setDetails({...details, email: e.target.value})} value={details.email}/>
        </div> */}

        <div className="form-group">
          <label htmlFor="passwor">Password:</label>
          <input type="password" name='password' id='password' onChange={ e => setDetails({...details, password: e.target.value})} value={details.password}/>
        </div>
          <input type="submit" value="Login" />
        
        {/* forgot password */}
        {/* signup button */}
        {/* name email id password confirm password mobile(verification) number (verification)*/}
      </div>
    </form>
  )
}