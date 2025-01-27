// import React from "react";
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route
// } from "react-router-dom";
// import Billingtable from "../components/Billingtable";
// import Home from "../pages/Home";

// function AppRoute(props) {
//     return (
//         <Router {...props}>
//             <Routes>
//                 <Route exact path="/" element={<Home />} />

//             </Routes>
//         </Router>
//     );
// }
// export default AppRoute;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../components/Dashboard';
import Inventory from '../components/Inventory';
import AddInventory from '../components/AddInventory';
import Category from '../components/Category';
import Billing from '../components/Billing';
import Login from '../pages/Loginpage';

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/AddInventory" element={<AddInventory />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Billing" element={<Billing />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;
