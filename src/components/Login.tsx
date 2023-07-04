import React,{useState} from "react";
import {TextField, Typography}  from '@mui/material'
import { useNavigate} from 'react-router-dom';

type InputProps={
  user:{
  name:string;
  email:string;
  password:string|number;
  contact:string | number;
}}


 function Input(props: InputProps) {

  const[state,setState]=useState<InputProps>({
    user:{
      name:'',
      email:'',
      password:'',
      contact:'',
    }
  });
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>):void=>{
    setState({
      user:{
        ...state.user,
        [event.target.name]:event.target.value,
      },
    });
  }

    const handleSubmit=(event:React.FormEvent<HTMLFormElement>):void=>{
      event.preventDefault();
      console.log(state.user);
    }

  
  return (
    <div>
      <form className="form1" onSubmit={handleSubmit}>
        <>
          <Typography variant='h5'>Login</Typography><br></br>
          <TextField label="Enter Name" variant='filled' value={state.user.name} required></TextField><br></br>
          <TextField label="Enter Email" variant='filled' value={state.user.email} required></TextField><br></br>
          <TextField label="Enter Password" variant='filled' value={state.user.password}required></TextField><br></br>
          <TextField label="Enter Contact Number" variant='filled' value={state.user.contact}required></TextField><br></br>
          <button id="submit" type='submit' name="Login" value="Sign in">Login</button>
        </>
      </form>
    </div>


  );
}
export default Input;