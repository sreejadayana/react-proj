import {useDebugValue, useEffect, useState} from 'react';
import axios from 'axios';
export function useAxiosGet(url){

    const [data,setData] = useState([]);

    useEffect( () =>{
 
          axios.get(url).then(
            response =>{
                  console.log(response.data); 
                  setData(response.data);
            }
          )
    },[]);
    useDebugValue("get api call")
    return data;
}
