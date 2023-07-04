import React,{useState} from "react";

type InputProps={
  user:{
  email:string;
  password:string|number;}}


 function Input(props: InputProps) {
  const[state,setState]=useState<InputProps>({
    user:{
      email:'',
      password:'',
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
    <div className="card">
      <form className="form" onSubmit={handleSubmit}>
        <>
          <h1>Sign In Form</h1>
  
          <input type='email'name="email" placeholder="Enter email" value={state.user.email} onChange={handleChange}/><br></br>
          <input type='password' name="password" placeholder="Enter password" value={state.user.password} onChange={handleChange} /><br></br>
          <button id="submit" type='submit' name="Sign In" value="Sign In">Sign In</button>
        </>
      </form>
    </div>


  );
}
export default Input;