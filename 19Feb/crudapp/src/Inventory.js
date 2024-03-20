import {useEffect, useState} from 'react';
import axios, { all } from 'axios';
import { config } from './Config';
function Inventory(){

               const [asset,setAsset] =  useState({
                    assetId: '',
                    name: '',
                    description: '',
                    url: ''
                   }); 
            const [allAssets, setAllAssets]=  useState([]);

            const getItems = () =>{
              var rows=  allAssets.map(asset =>{
                     return <tr key={asset.assetId}> <td>{asset.assetId}</td> <td>{asset.name}</td> <td>{asset.description}</td> <td><img height="100px" src={asset.url}></img></td> <td><button>Edit</button></td> <td><button>Delete</button></td></tr>
                })

                return rows;
            }

            useEffect(
                () => {
                      const getAssets = async () =>{
                        try{
                            var allAssets =  await axios.get(config.URL+"/addAsset");
                            setAllAssets(allAssets.data);
                        }
                        catch(error){
                               console.log(error);
                        }
                             
                      }
                      getAssets();
                }, [allAssets]
            )
            const updateState = (event) =>{
                        var name = event.target.name;
                        var value = event.target.value; 
                         setAsset({...asset,[name]:value});
            }

            const addAsset = async (event) =>{
                        event.preventDefault();
                        console.log(asset);
                       // axios.post("")
                      console.log(config.URL);
try{
   const response = await axios.post(config.URL+"/addAsset",asset);
   console.log(response);
   if(response.status == 201){
    alert("Asset Added Succesfully");
   }
}
catch(error){
    console.log(error);
     alert("Error Occured"); 
}
                    
            }

        return(
            <div>
                 <h1>Add Asset Form</h1>
                 <form>
                    <input onChange={updateState}  size="40" type="text" name="assetId" placeholder=" enter asset id"></input> <br></br><br></br>
                    <input onChange={updateState}  size="40" type="text" name="name" placeholder=" enter asset name"></input> <br></br><br></br>
                    <input onChange={updateState}  size="40" type="text" name="description" placeholder=" enter asset description"></input> <br></br><br></br>
                    <input onChange={updateState}  size="40" type="text" name="url" placeholder=" enter asset url"></input> <br></br><br></br>
                    <button onClick={addAsset}>Add Asset</button>
                 </form>
                 {allAssets.length}
                  
                    <table border="1" width="100%">
                          <thead>
                                <th>Asset ID</th>
                                <th>Asset Name</th>
                                <th>Asset Description</th>
                                <th>Image</th>
                                <th colSpan="2">Operation</th>
                          </thead>

                           <tbody>
                                      {getItems()}
                           </tbody>
                    </table>
            </div>
        )

}
export default Inventory;