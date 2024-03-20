import {useEffect, useRef, useState} from 'react';
import axios from 'axios';

function Inventory(){

               const [asset,setAsset] =  useState({
                    assetId: '',
                    name: '',
                    description: '',
                    url: ''
                   }); 

                 let submitBtnRef = useRef();
                 let usernameRef = useRef();

                 const [isComponentLoaded, setComponentLoaded]= useState(false);
           
           
            const updateState = (event) =>{
                        var name = event.target.name;
                        var value = event.target.value; 

                         if(name == "assetId"){

                             if(/^\d{1,6}$/.test(value)){
                                   usernameRef.current.innerText = "Asset ID is Valid"
                                   usernameRef.current.style.color ="green";
                             }
                             else{
                                  usernameRef.current.innerText= "Asset ID is invalid";
                                  usernameRef.current.style.color ="red";
                             }

                         }
                         setAsset({...asset,[name]:value});

                         // button disability check

                   
            }

            const addAsset = async (event) =>{
                        event.preventDefault();
                        console.log(asset);
                       // axios.post("")
                     // console.log(config.URL);

                    
            }

            useEffect( () =>{
                    if(!isComponentLoaded){
                    submitBtnRef.current.disabled = true;
                    setComponentLoaded(true);
                    }
                   asset.assetId.length > 0 && asset.name.length > 0 && asset.description.length > 0 && asset.url.length > 0 ? submitBtnRef.current.disabled = false : submitBtnRef.current.disabled = true;
            },[asset])

        return(
            <div>
                 <h1>Add Asset Form</h1>
                 <form>
                    <input onChange={updateState}  size="40" type="text" name="assetId" placeholder=" enter asset id"></input> <span ref={usernameRef}></span> <br></br><br></br>
                    <input onChange={updateState}  size="40" type="text" name="name" placeholder=" enter asset name"></input> <br></br><br></br>
                    <input onChange={updateState}  size="40" type="text" name="description" placeholder=" enter asset description"></input> <br></br><br></br>
                    <input onChange={updateState}  size="40" type="text" name="url" placeholder=" enter asset url"></input> <br></br><br></br>
                    <button ref={submitBtnRef} onClick={addAsset}>Add Asset</button>
                 </form>
                
                    
            </div>
        )

}
export default Inventory;