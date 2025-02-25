import './App.css';
import { Link, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/Auth/RegistrationPage';
import LoginPage from './pages/Auth/LoginPage';
import UserPage from './pages/User/UserPage';
import ManagerPage from './pages/Manager/ChangeTable';

function App() {
  return (
    <div className="App">
      <h1>welcome</h1>
       <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <div class="container-fluid">
          <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/user">User</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/userlist">Manager</Link></li>
          </ul>
        </div>
    </nav>
      <Routes>
        <Route path="/" Component={HomePage}> </Route>
        <Route path="/register" Component={RegistrationPage}> </Route>
        <Route path="/login" Component={LoginPage}> </Route>
        <Route path="/user" Component={UserPage}> </Route>
        <Route path="/userlist" Component={ManagerPage}> </Route>
      </Routes> 
    </div>
  );
}

export default App;
