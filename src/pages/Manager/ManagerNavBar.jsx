// src/pages/Manager/ManagerPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import ManageTables from './ManageTables';
import SeeReservations from './SeeReservation';
import '../Styling/ManagerPage.css'; 
import { useState } from 'react';

function ManagerNavBar() {
  return (
    <div className="manager-page">
     
       <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/manager/manage-tables">Manage Tables</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/manager/see-reservation">See Reservations</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default ManagerNavBar;

// function ManagerNavBar() {
//   const [activeComponent, setActiveComponent] = useState('manage-tables');

//   const renderComponent = () => {
//     switch (activeComponent) {
//       case 'manage-tables':
//         return <ManageTables />;
//       case 'see-reservations':
//         return <SeeReservations />;
//       default:
//         return <ManageTables />;
//     }
//   };

//   return (
//     <div className="manager-page">
//       <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//         <div className="container-fluid">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link" to="#" onClick={() => setActiveComponent('manage-tables')}>
//                 Manage Tables
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="#" onClick={() => setActiveComponent('see-reservations')}>
//                 See Reservations
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <div className="container mt-5">
//         {renderComponent()}
//       </div>
//     </div>
//   );
// }

// export default ManagerNavBar;