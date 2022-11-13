import React, { useContext } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { AuthContext } from './AuthComponent'
import "./Programs.css";
import Fotter from './Fotter';
import Navbaar from './Navbaar';
export default function Programs() {

const {state,dispatch}=useContext(AuthContext)



useEffect(()=>{
axios.get(`https://mockapitestkiyaji.herokuapp.com/products`)
.then((res)=>dispatch({type:"datafetch",payload:res.data}))
},[])


  return (
<>
<Navbaar/>

    <div id="box">

<h1>Workout Programs</h1>
    
    <div id='grid'>

    {
        state.data?.map((el)=>
        <div key={el.id} id="container">
            <img src={el.image1} alt="" style={{height:"200px", width:"100%"}} />
            <p id="day">4 weak programe-32 min/day</p>
            <h5>{el.title}</h5>
       
            <p>${el.price}</p>
       </div>
       )
    }
    </div>
  
    </div>
    <Fotter/>
    </>
  )
}
