import './App.css';
import { Link, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/Auth/RegistrationPage';
import LoginPage from './pages/Auth/LoginPage';
import UserPage from './pages/User/UserPage';
import ManageTables from './pages/Manager/ManageTables';
import SeeReservation from './pages/Manager/SeeReservation';
import ManagerNavBar from './pages/Manager/ManagerNavBar';

function App() {
  return (
    <div className="App">
       <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <div class="container-fluid">
          <ul className="navbar-nav">
            <>
            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/user">User</Link></li></>
            {/* <li className="nav-item"><Link className="nav-link" to="/manager/manage-tables">ManageTables</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/manager/see-reservation">See Reservation</Link></li>
              */}
          </ul>
        </div>
    </nav>
      <Routes>
        <Route path="/register" Component={RegistrationPage}> </Route>
        <Route path="/login" Component={LoginPage}> </Route>
        <Route path="/" Component={HomePage}> </Route>
        <Route path="/user" Component={UserPage}> </Route>
        <Route path="/manager" element={<ManagerNavBar />} />
        <Route path="/manager/manage-tables" element={<ManageTables />} />
        <Route path="/manager/see-reservation" element={<SeeReservation />} />
      </Routes> 
    </div>
  );
}

export default App;

// import './App.css';
// import { Link, Route, Routes } from "react-router-dom";
// import HomePage from './pages/HomePage';
// import RegistrationPage from './pages/Auth/RegistrationPage';
// import LoginPage from './pages/Auth/LoginPage';
// import UserPage from './pages/User/UserPage';
// import ManageTables from './pages/Manager/ManageTables';
// import SeeReservation from './pages/Manager/SeeReservation';
// import ManagerNavBar from './pages/Manager/ManagerNavBar';

// function App() {
//   const role = "user"; // Define the role here (e.g., 'user', 'manager')

//   return (
//     <div className="App">
//       <nav className="navbar navbar-expand-sm bg-light navbar-light">
//         <div className="container-fluid">
//           <ul className="navbar-nav">
//             {/* Show first 4 nav items for 'user' role */}
//             {role === "user" && (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/register">Register</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login">Login</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/user">User</Link>
//                 </li>
//               </>
//             )}
//             {/* Show all nav items if the role isn't 'user' */}
//             {role !== "user" && (
//               <>
               
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/manager/manage-tables">Manage Tables</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/manager/see-reservation">See Reservation</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </nav>

//       <Routes>
//         <Route path="/register" Component={RegistrationPage} />
//         <Route path="/login" Component={LoginPage} />
//         <Route path="/" Component={HomePage} />
//         <Route path="/user" Component={UserPage} />
//         <Route path="/manager" element={<ManagerNavBar />} />
//         <Route path="/manager/manage-tables" element={<ManageTables />} />
//         <Route path="/manager/see-reservation" element={<SeeReservation />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
