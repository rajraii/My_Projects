import React, {useState} from 'react'
import Form1 from './components/forms/Form1';
export default function App() {
  
  const admin ={
    email: "admin@123.com",
    password: "admin123"
  }
  
  const [user,setUser]= useState ({name: "", email: ""});
  const [error, setError] =useState("");

  const Login = details =>{
    console.log(details);

    if(details.email===admin.email && details.password === admin.password )
    {   console.log("logged in");
        setUser({
          name : details.name,
          email: details.email
        }); 
    }
    else {
      console.log("details do not match");
      setError("Details do not Match!");
    }
  }

  const Logout =()=>{
    setUser({name: "", email: "", password:"" });
  }

  return (
    <div className='App'>
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
        ) : (
          <Form1 Login={Login} error={error}/>
        )
      }
    </div>
  )
}
