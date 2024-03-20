import logo from './logo.svg';
import './App.css';
import {useState,createContext} from 'react';
import Component1 from './Component1';

export const Context= createContext();

function App() {

   const [user,setUser] = useState([{
        username: "sreeja", 
        email : "sreeja@gmail.com.com"
   },
   {
    username: "dayana", 
    email : "dayana@gmail.com"
},
{
  username: "sreeja", 
  email : "sreeja@gmail.com"
}])

   
  return (
    <div className="App">
            <Context.Provider value={user}>
            <Component1></Component1>
            </Context.Provider>
    </div>
  );
}
export default App;