import React, { useState } from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext()
const initobj={
data:[],
dataall:[]
}





export default function AuthContextprovider({children}) {

  const [statelog,setState]=useState({
   
    token:null,
    isAuth:false
  })
  const logoutUser=()=>{
    setState({
        ...statelog,
        isAuth:false,
        token:null
    })
  }
  
  
  
  const loginUser=(token)=>{
    setState({
      ...statelog,
      isAuth:true,
      token:token
    })
  }
  
  function reducer (state,action){
      switch(action.type){
          case "datafetch":return{...state,data:action.payload}
          case "fetchError":return false
           default:return state
      }
  }

const [state,dispatch] =useReducer(reducer,initobj)

const value={state,dispatch,statelog,loginUser,logoutUser}
  return (
  <AuthContext.Provider value={value }>{children}</AuthContext.Provider>
  )
}
