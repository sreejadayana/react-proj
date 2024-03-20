import {useState, useEffect} from 'react';
function MyComponent(){

      const [count, setCount] = useState(0);
      const [iterator, setIterator] = useState(0);
      
        useEffect(
             () =>{
                  console.log("use effect called");

                   // FileSystem -> opened a file
                  return () =>{
                     console.log("clean up called");
                      // file closing logic
                  }
             }, [count]
        )

        return(
            <div>
                 <h1>The current Count is {count}</h1>
                 <h1>The iterative Count is {iterator}</h1>
                 {console.log("component rendered")}
                  <button onClick={ 
                      () =>{
                          setCount(count+1)
                      }
                  }>Update</button>

                        <button onClick={ 
                      () =>{
                          setIterator(iterator+1)
                      }
                  }>Iterate</button>
            </div>
        )

}
export default MyComponent;