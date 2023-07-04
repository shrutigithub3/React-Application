type GreetProps={
   name: string
   age: number
   isLoggedIn:boolean
}
const Greet=(props:GreetProps)=>{
    return(
        <div>
            <h2>
                {
                props.isLoggedIn ? `Hi!!! I am {props.name},I am {props.age} years old`:'Welcome'}</h2>
                 
               
        </div>
    )
}
export default Greet;