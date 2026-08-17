// import { useEffect, useState } from "react"
// import data from "./../../public/newdata.json"
// const UseeffectFuction = () => {

//     const [count, setcount] = useState(0);
//     const [products, setProducts] = useState([]);



//     // const sample = () =>{

//     //    setTimeout(()=>{
//     //     setcount(prevCount=>prevCount+1)
//     //    },2000)



//     // useEffect(sample,[])
//     const fetching = () => {
//         // fetch("https://dummyjson.com/products")
//         //     .then(res => res.json())
//         //     .then(data => setProducts(data.products));

//         async function getproducts() {
//             const res = await fetch("https://dummyjson.com/products");
//             const data = await res.json();
//             setProducts(data.products);
//         }
//         getproducts();

//     }

//     useEffect(fetching, [])

//     // console.log("data fetching. ");



//     return (
//         <div>
//             <h1>count: [ {count} ]</h1>
//             <button onClick={() => setcount(count + 1)}>increase</button>
//             {/* <button onClick={() => setcount(count - 1)}>decrease</button>
//             <button onClick={() => setcount(0)}>reset</button> */}

//         </div>
//     )

// }
// export default UseeffectFuction








import axios from 'axios'
import { useEffect, useState } from 'react';
import './Useeffect.css'

const UseeffectFuction = () => {


    const [products, setProducts] = useState([]);

    const feteData = async () => {
        const response = await axios.get("https://dummyjson.com/products")
        console.log("response :", response.data.products);
        setProducts(response.data.products)
        // console.log("sdfghjkl" ,products);



    }

    useEffect(() => {
        feteData()

    }, [])





    return (
        <div>
            <div>
                <nav className='navbar'><ul className='nav'><li>Home</li>
                    <li>About</li>
                    <li>Products</li></ul>
                    <button className='b0'>Cart</button></nav>
            </div>
            <div className='products'>
                {products.map((data) => (
                    <div className='cart' key={data.id}>
                        <div className='cartitems'>
                            <div className='cartimg'><img src={data.images} alt="" className='img1' /></div>
                            <h3>{data.title}</h3>
                            <h4>{data.price}</h4>
                            <h5>{data.description}</h5></div>
                        <ul>{data.reviews.map((reviews) => (
                            <li>{reviews.comment}</li>
                        ))}</ul>

                        <h5>{data.category}</h5>
                        <div className='btn'>

                            <button className='b1'>Add to Cart</button>
                        </div>
                    </div>

                ))}
            </div>
            <div><footer></footer></div>
        </div>
    )


}
export default UseeffectFuction



