import { useContext } from "react";
import { Context } from "./App";

function Component3(){

      const data = useContext(Context);

      console.log("data", data);
    return(
       <div>
            <h1>Component 3</h1>

          <h1>{data[2].username}  {data[2].email}</h1>  
           
       </div>
    )
}
export default Component3;