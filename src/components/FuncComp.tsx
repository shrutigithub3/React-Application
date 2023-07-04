import React,{useState} from "react";
interface IState{
    name:string;
    profession:string;
}

interface IPROPS{
    name:String;
    title:String;
    age?: Number;

}
let Customers:React.FC<IPROPS>=({name,title})=>{
    const[state,setState]=useState<IState>({
        name:"shruti",
        profession:"web dev",
    })
    return(
        <><div>
            <h1>Customer Data</h1>
            <h4>Name:{name}</h4>
            <h4>Title:{title}</h4>
        </div><div>
                <h1>Values from state</h1>
                <h4>Name:{state.name}</h4>
                <h4>Profession:{state.profession}</h4>
            </div></>
    )
}
export default Customers;