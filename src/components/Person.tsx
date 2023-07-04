type Personprops={
    name:{
    firstname:string
    lastname:string
    }
}
const Person=(props:Personprops)=>{
    return(
        <div>{props.name.firstname} {props.name.lastname}</div>
    )
}
export default Person;