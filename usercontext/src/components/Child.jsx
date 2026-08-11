import { useContext } from "react"
import { context } from "../components/Sample"


const Child =()=>{

    // const user = useContext(context)
    // const [a,b,c]=useContext(context)
    
    const {name,array,object,object2}= useContext(context)

    // console.log("data:",user);
    



    return(
        <div>
            {/* <h1>age: {.age,b[2],a]}</h1> */}
            <h1>helo{name} !</h1>
        </div>
    )
}
export default Child