import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import User from './User';
import Login from './Login';

function App() {
      
  const [isUserLoggedIn, setLogin] = useState(true);
  const token = 1234;
   
  
  return (
    <div className="App">
           { isUserLoggedIn && token==123 ? <User></User>: <Login></Login>}
    </div>
  );
}

export default App
