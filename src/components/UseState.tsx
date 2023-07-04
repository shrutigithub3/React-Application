import {useState} from 'react';

type AuthUser={
    name:string;
    email:string
}

export const User=()=>{
   const[user,setUser]=useState<AuthUser|null>(null)

const handleLogin=()=>{
   setUser({
    name:'shruti',
    email:'sk@gmail.com',
 })
}
const handleLogout=()=>{
   setUser(null)
}


return(
    <>
    <div>
    <button id='btns1' onClick={handleLogin}>Login</button>
    <button id ='btns2'onClick={handleLogout} >Logout</button>
    <div> User Name is {user?.name}</div>
    <div> User Email is {user?.email}</div>
    </div>
    </>
)
}


