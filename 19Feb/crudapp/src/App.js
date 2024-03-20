import logo from './logo.svg';
import './App.css';
import Inventory from './Inventory';
import {HashRouter, Link, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <HashRouter>
     <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">Inventory Management</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link"  to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact" >Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/inventory" >Inventory</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search for Items"></input>
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
  <Routes>
                  <Route path='/login' element={<Login></Login>}></Route>
                  <Route path='/register' element={<Register></Register>}></Route>
                  <Route path='/contact' element={<Contact></Contact>}></Route>
                  <Route path='/inventory' element={<Inventory></Inventory>}></Route>
       </Routes>
         
</HashRouter>

    </div>
  );
}

export default App;
