import { useEffect, useState } from "react"

const UseeffectFuction = () => {

    const [count, setcount] = useState(0);
    useEffect(() => {
            console.log("Hello",count);
        },[count])

    return (
        <div>
            <h1>count: [ {count} ]</h1>
            <button onClick={() => setcount(count + 1)}>Click</button>
        </div>
    )

}
export default UseeffectFuction