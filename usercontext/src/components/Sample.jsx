import { createContext, useState } from "react"

export const context = createContext()

const Sample = ({children})=>{

    const [user,setuser]=useState(" world")
    const [user1,setuser1]=useState([' 1',' 2',' 3'])
    const [user2,setuser2]=useState({name:"  alice ", age:20})


    return(
        <context.Provider value={[user,user1[2],user2.name]}>
            {children}
        </context.Provider>
    )
}
export default Sample