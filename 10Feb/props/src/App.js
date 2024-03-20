import logo from './logo.svg';
import './App.css';
import Employees from './Employees';

function App() {

  const employees = [
    {
      name: "sreeja", 
      address: "hyderabad"
    }, 
    {
      name:"dayana", 
      address: "Chennai"
    },
    {
      name:"chandhu", 
      address: "Chennai"
    }
  ];
  return (
    <div className="App">
         <h1>I am in App Component!</h1>
          <Employees emps={employees}></Employees>
           
    </div>
  );
}

export default App;

