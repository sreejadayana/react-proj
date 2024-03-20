import { useEffect, useState, useRef} from "react";
function Counter(){
            console.log("Counter Component Loaded");
       const [username, setUsername] = useState("");
        const usernameCapture = (event) =>{
            setUsername(event.target.value);
        }

         const componentDidMount = () =>{
                        console.log("Component DID Mount called");
         }

         const componentDidUpdate = () =>{  
            console.log("Component Did update called");
             if(username.includes("@")){
                alert("username should not have @");
             }
             
         }
         const componentWillUnMount = () => {
            console.log("Component will unmount");
         }

        useEffect(() => { 
            console.log("useffect called");
             if(username == ""){
                   componentDidMount();
             }
             else{
                      componentDidUpdate();
             }

            // return componentWillUnMount();
                  
        })    
        return(
            <div>
                   <input onChange={usernameCapture} type="text" name="username" placeholder="enter username"></input>
                  
            </div>
        )

}

export default Counter;