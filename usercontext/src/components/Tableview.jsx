import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Tableview = () => {
  const { userId } = useParams();
  const [data,setData] = useState({})

  const fetchDatabyid =async () => {
    const response = await axios.get(`https://crud-project-hbt0.onrender.com/auth/view/${userId}`)
    console.log(response.data.data);
    setData(response.data.data)
    
  };
  useEffect(()=>{
    fetchDatabyid()
  },[userId])

  return (
    <div>
      <h1>table view {data.email}</h1>
      <h1>table view {data.userName}</h1>
    </div>
  );
};
export default Tableview;
