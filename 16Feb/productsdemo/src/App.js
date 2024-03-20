import logo from './logo.svg';
import './App.css';
import Products from './Products';
import { useEffect, useLayoutEffect, useState } from 'react';

function App() {

       const [counter, setCounter] = useState(0);

     useLayoutEffect(() =>{
                  setCounter(1000);   
     },[])

  return (
    <div>
       <Products></Products>
        {/* <h1>App Component!</h1>
         <h1>Counter value is {counter}</h1> */}
    </div>
  );
}

export default App;


/*

USEEFFECT:  works asynchronusly 

*/
