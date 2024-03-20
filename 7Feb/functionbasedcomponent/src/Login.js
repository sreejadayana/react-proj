import { useState } from "react";

// JSX - Javscript and XML 
function Login(){

    //   const [username,setUsername] = useState("");
    //   const [password, setPassword] = useState("");

       const [loginForm,setLoginForm] = useState({
          username: '',
          password: ''
       })

     const loginUser = (event) =>{
        event.preventDefault();     //to stop the refresh in ui
         console.log("login user called");

         console.log(loginForm);

     }
      
      const capture = (event) =>{
            //   if(event.target.name == "username"){
            //     setLoginForm({username:event.target.value, password:loginForm.password})
            //   }
            //   if(event.target.name == "password"){
            //     setLoginForm({password:event.target.value, username:loginForm.username})
            //   }

              var name = event.target.name; 

               setLoginForm({...loginForm,[name]:event.target.value})
              
      }
        

//      const usernameCapture = (event) =>{
//            setUsername(event.target.value);
//      }
//      const passwordCapture = (event) =>{
//         setPassword(event.target.value);
//   }

    return (
        <div>
             <h1>Login Here</h1>
                 <form>
                     <input name="username" onChange={capture}  style={{padding:"10px", borderWidth:'5px'}} type="text" placeholder="username here"></input> &nbsp;&nbsp;&nbsp;
                      <input name="password" onChange={capture} style={{padding:"10px", borderWidth:'5px'}} type="text" placeholder="password here"></input>&nbsp;&nbsp;
                       <button onClick={loginUser}  style={{padding:"10px", borderWidth:'5px', width:'100px'}}>Login</button>
                 </form>
        </div>
    )
}
export default Login;