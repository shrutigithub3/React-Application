import { count } from "console";
import React,{useState} from "react";
interface IState{
count:number;
}
interface IProps{

}

const Counter : React.FC=()=>{
    const[state,setState]=useState<IState>({count:0})
    const handleIncrement=()=>{
        setState({count:state.count + 1});
    }
    const handleDecrement=()=>{
        setState({count:state.count - 1});
    }
    return(
        <><h1>Counter Application</h1>
        <div className="card">
            <h2>{state.count}</h2>
        <button className="btn1" onClick={handleIncrement}>Increment</button>
        <button className="btn2" onClick={handleDecrement}> Decrement</button>
        </div>
        </>
    )

}
export default Counter;