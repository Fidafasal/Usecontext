import { useEffect, useState } from "react"

const UseeffectFuction = () => {
    
    const [count, setcount] = useState(0);

  

    const sample = () =>{

       setTimeout(()=>{
        setcount(prevCount=>prevCount+1)
       },2000)
        
    }

    useEffect(sample)


    return (
        <div>
            <h1>count: [ {count} ]</h1>
            <button onClick={() => setcount(count+1)}>increase</button>
            {/* <button onClick={() => setcount(count - 1)}>decrease</button>
            <button onClick={() => setcount(0)}>reset</button> */}
        </div>
    )

}
export default UseeffectFuction