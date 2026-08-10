import { useContext } from "react"
import { context } from "../components/Sample"


const Child =()=>{

    const data = useContext(context)
    // const [a,b,c]=useContext(context)


    return(
        <div>
            {/* <h1>age: {[c.age,b[2],a]}</h1> */}
            <h1>hello {data}</h1>
        </div>
    )
}
export default Child