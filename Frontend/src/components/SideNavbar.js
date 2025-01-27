import React from "react";
import {
  Dashboard,
  Store,
  AddBox,
  Receipt,
  Category,
  Calculate,
  Menu as MenuIcon,
  MenuOpen as MenuOpenIcon
} from '@mui/icons-material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import "./SideNavbar.css";

const Sidebar = ({ sidebarOpen, toggleSidebar, setActiveComponent }) => {
  return (
    <div className={`Sidebar ${sidebarOpen ? "Sidebar-open" : "Sidebar-close"}`}>
      {/* Sidebar Heading */}
      <div className="Sidebar-heading ">
        {sidebarOpen && <h2 className="p-2">Parccon Ki Dukkan</h2>}
      </div>

      {/* Toggle Button */}
      <div className="Sidebar-toggleButton">
        <button onClick={toggleSidebar}>
          {sidebarOpen ? <ArrowBackIosNewSharpIcon />:<ArrowForwardIosSharpIcon /> }
        </button>
      </div>

      {/* Sidebar Items */}
      <div className="Sidebar-items">
        <div className="SidebarItem" onClick={() => setActiveComponent("Dashboard")}>
          <Dashboard style={{ color: "#fff" }} />
          {sidebarOpen && <span>Dashboard</span>}
        </div>

        <div className="SidebarItem" onClick={() => setActiveComponent("Inventory")}>
          <Store style={{ color: "#fff" }} />
          {sidebarOpen && <span>Inventory</span>}
        </div>

        <div className="SidebarItem" onClick={() => setActiveComponent("AddInventory")}>
          <AddBox style={{ color: "#fff" }} />
          {sidebarOpen && <span>Add Inventory</span>}
        </div>

        <div className="SidebarItem" onClick={() => setActiveComponent("Billing")}>
          <Receipt style={{ color: "#fff" }} />
          {sidebarOpen && <span>Billing</span>}
        </div>

        <div className="SidebarItem" onClick={() => setActiveComponent("Category")}>
          <Category style={{ color: "#fff" }} />
          {sidebarOpen && <span>Category</span>}
        </div>

        <div className="SidebarItem" onClick={() => setActiveComponent("Calculator")}>
          <Calculate style={{ color: "#fff" }} />
          {sidebarOpen && <span>Calculator</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

