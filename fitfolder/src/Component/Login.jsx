import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthComponent'

export default function Login() {





const navigate =useNavigate()
const {loginUser} = useContext(AuthContext)
    const [email,setemail]=useState("")
const [password,setpassword] =useState("")


const handleSubmit=(e)=>{
    e.preventDefault()
    fetch("https://reqres.in/api/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email,password})
    }).then((res)=>res.json())
    .then((res)=>{
      if(res.token){
        loginUser(res.token)
        navigate("/");
        
        console.log(res)
      }
    }).catch((err) => {
      console.log(err);
      
    });

}

  return (
    <div>
        <h1>HELLO USER</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input  
            type="email"
             placeholder="email"
             onChange={(e)=>setemail(e.target.value)}
             value={email}
             />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
             
              type="password"
              placeholder="password"
              onChange={(e)=>setpassword(e.target.value)}
              value={password}
            />
          </label>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>

    </div>
    )
}
