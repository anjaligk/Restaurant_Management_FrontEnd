import './App.css';
import { Route, Routes} from "react-router-dom";
import HomePage from './pages/Auth/HomePage';
import RegistrationPage from './pages/Auth/RegistrationPage';
import LoginPage from './pages/Auth/LoginPage';
import ManageTables from './pages/Manager/ManageTables';
import SeeReservation from './pages/Manager/SeeReservation';
import ManagerNavBar from './pages/Manager/ManagerNavBar';
import UserNav from './pages/User/UserNav';
import AddTables from './pages/Manager/AddTables';
import BookTable from './pages/User/BookTable';
import ManageReservations from './pages/User/ManageReservations';
import About from './pages/Auth/About';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/about" Component={About}> </Route>
        <Route path="/register" Component={RegistrationPage}> </Route>
        <Route path="/login" Component={LoginPage}> </Route>
        <Route path="/" Component={HomePage}> </Route>
        <Route path="/user" Component={UserNav}> </Route>
        <Route path="/manager" element={<ManagerNavBar />}>
          <Route index element={<AddTables />} /> 
          <Route path="add-tables" element={<AddTables />} />
          <Route path="manage-tables" element={<ManageTables />} />
          <Route path="see-reservation" element={<SeeReservation />} />
        </Route>
        <Route path="/user" element={<UserNav />}>
          <Route index element={<BookTable />} /> 
          <Route path="book-table" element={<BookTable />} />
          <Route path="manage-reservations" element={<ManageReservations />} />
        </Route>  
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
