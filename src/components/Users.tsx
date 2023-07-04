import React from "react";
interface IPROPS{
    userid:number;
}

export class Users extends React.Component<IPROPS>{
    constructor(props:IPROPS){
        super(props)
    }
    render() {
        return(
            <>
           <h1>Welcome to class Component!!</h1>
           <h6>USER ID:{this.props.userid}</h6>
           </>
        )
           
    }
}