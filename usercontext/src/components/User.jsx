import { useState } from "react"
import { useParams } from "react-router-dom";

const User = () =>{
 
 const { id } = useParams();
 console.log(id);
 
 

    return (
        <div>
            <h1>User page</h1>
          <h2>User ID: {id}</h2>
        </div>
    )
}
export default User