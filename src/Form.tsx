import { Box } from '@mui/material';
import { type } from 'os';
import React,{useState} from 'react';

type Props={
    setData:null;
    setPrint:boolean;
    Name:string;

}
function Form(props:Props){
    const[data,setData]=useState(null);
    const[print,setPrint]=useState(false);

    function getData(val:any){
        setData(val.target.value)
        setPrint(false)
        console.log(val.target.value)

    }
    return(
        
        <>
        <div id ="main">
        <div className='Form'>
            <h1>Form</h1>
             
              <input type='text' name='Name' placeholder='Enter Name' onChange={getData} />
                 <button id="btn" onClick={() => setPrint(true)}>Submit</button>
        </div>
        <div className='data'>
                {print ?
                    <><h4>OUTPUT:</h4><h5 className='box'>{data}</h5></>
                    : null}

            </div>
        </div>
       
           
            </>
      
    )

}
export default Form;