import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext()
const initobj={
data:[],
dataall:[]
}


function reducer (state,action){
    switch(action.type){
        case "datafetch":return{...state,data:action.payload}
        case "fetchError":return false
         default:return state
    }
}



export default function AuthContextprovider({children}) {
const [state,dispatch] =useReducer(reducer,initobj)

const value={state,dispatch}
  return (
  <AuthContext.Provider value={value }>{children}</AuthContext.Provider>
  )
}
