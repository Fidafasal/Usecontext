import data from "../data"

const Json = () => {

    console.log("name = ", data.name);
    console.log("city =", data.city);

    console.log(data);
    
    //  stringfy
    const Data = JSON.stringify(data);
    console.log(Data);

    // parse


    return (


        <div>



        </div>
    )
}
export default Json