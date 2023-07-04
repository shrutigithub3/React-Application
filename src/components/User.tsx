import {useContext} from 'react'
import { UserContext } from "./Context"



export const User=()=>{
    const userContext = useContext(UserContext)
  

const handleLogin=()=>{
 
    if(userContext){
        userContext.setUser({
            name:'shruti',
            email:'sk@gmail.com'
        })
    }
}
const handleLogout=()=>{
    if(userContext){
        userContext.setUser(null)
    }
 
}


return(
    <>
    <div>
    <button id='btns1' onClick={handleLogin}>Login</button>
    <button id ='btns2'onClick={handleLogout} >Logout</button>
    <div> User Name is {userContext?.user?.name}</div>
    <div> User Email is {userContext?.user?.email}</div>
    </div>
    </>
)
}