import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

 const [users, setUsers] = useState([]);
  console.log("component Loaded");

  useEffect(() =>{
    console.log("component did mount")
  })
  return (
    <div className="App">
      <h1>App component</h1> 
      
    </div>
  );
}

export default App;
