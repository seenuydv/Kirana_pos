import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/SideNavbar";
import Dashboard from "../components/Dashboard"; // Import your components
import Inventory from "../components/Inventory";
import AddInventory from "../components/AddInventory";
import Billing from "../components/Billing";
import Category from "../components/Category";
import Calculator from "../components/Calculator";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Dashboard"); // Default component

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Render the component based on the active selection
  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Dashboard />;
      case "Inventory":
        return <Inventory />;
      case "AddInventory":
        return <AddInventory />;
      case "Billing":
        return <Billing />;
      case "Category":
        return <Category />;
      case "Calculator":
        return <Calculator/>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Row style={{ height: '100vh', margin: 0 }}> {/* Full height and remove margin */}
      <Col lg={sidebarOpen ? 2 : 1}  style={{ padding: 0 }}> {/* Remove padding */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          setActiveComponent={setActiveComponent} // Pass down the function to set the component
        />
      </Col>
      <Col lg={sidebarOpen ? 10 : 11}  style={{ padding: '20px', overflowY: 'auto' }}>
        {renderComponent()} {/* Dynamically render the component */}
      </Col>
    </Row>
  );
};

export default Home;
