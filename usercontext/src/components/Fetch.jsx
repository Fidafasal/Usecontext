import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { MdPreview } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Fetch = () => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    const response = await axios.get(
      "https://crud-project-hbt0.onrender.com/auth/users",
    );
    console.log("asdfghjk", response.data.data);
    setData(response.data.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const navigate = useNavigate();




  const userView = (userId) => {
    navigate(`/Tableview/${userId}`);
  };

  return (
    <div>
      <h1>hello</h1>
      {/* {data.map((user) => (
        <div key={user._id}> */}
      {/* <div>
            <img src={user.image} />
            </div>
          <p> <b>User_id</b> : {user._id}</p>
          <p> <b>User_name</b> : {user.userName}</p>
          <p> <b>User_email</b> : {user.email}</p>
          <p> <b>created</b> : {user.createdAt}</p>
          <p> <b>Updated</b> : {user.updatedAt}</p> */}

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>created</th>
            <th>updated</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.updatedAt}</td>
              <td onClick={()=>userView(user._id)}>
                <MdPreview />
              </td>
              <td>
                <MdDelete />
              </td>
              <td>
                <MdModeEdit />
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </Table>
    </div>
  );
};
export default Fetch;
