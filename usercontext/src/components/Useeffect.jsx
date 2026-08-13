import { useEffect, useState } from "react"
import data from "./../../public/newdata.json"
const UseeffectFuction = () => {

    const [count, setcount] = useState(0);
    const [products,setProducts]=useState([]);



    // const sample = () =>{

    //    setTimeout(()=>{
    //     setcount(prevCount=>prevCount+1)
    //    },2000)



    // useEffect(sample,[])
    const fetching = () => {
        // fetch("https://dummyjson.com/products")
        //     .then(res => res.json())
        //     .then(data => setProducts(data.products));

        async function getproducts() {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            setProducts(data.products);
        }
            getproducts();
        
    }

    useEffect(fetching, [])

    // console.log("data fetching. ");



    return (
        <div>
            <h1>count: [ {count} ]</h1>
            <button onClick={() => setcount(count + 1)}>increase</button>
            {/* <button onClick={() => setcount(count - 1)}>decrease</button>
            <button onClick={() => setcount(0)}>reset</button> */}

        </div>
    )

}
export default UseeffectFuction