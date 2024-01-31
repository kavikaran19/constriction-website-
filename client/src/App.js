import "./App.css";

import Login from "./admin/pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/pages/Dashboard/Dashboard";
import Sidebar from "./admin/pages/Dashboard/Sidebar";
import About from "./website/pages/About/About";
import ContactUs from "./website/pages/ContactUs/ContactUs";
import Orders from "./admin/pages/Dashboard/Orders";
import Service from "./website/pages/Service/Service";
import Header from "./admin/pages/Dashboard/Header";
import Home from "./admin/pages/Dashboard/Home";
import Registration from "./website/pages/Login/Registration";
import UHome from "./website/pages/Home/UHome";
import Navbar from "./website/pages/Navbar/Navbar";
import CustomerTable from "./admin/components/CustomerTable";
import Userlogin from './website/pages/Login/Userlogin'
import Project from "./website/pages/Projects/Project";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}></Route>
        <Route path="/" element={<Dashboard />}>
          <Route path="/Orders" element={<Orders />}></Route>
          <Route path="/Dashboard" element={<Home />}></Route>
          <Route path="/customer" element={<CustomerTable />}></Route>
        </Route>

        
        <Route path="/Userlogin" element={<Userlogin />}></Route> 
        <Route path="/Registration" element={<Registration />}></Route>

        <Route path="/Navbar" element={<Navbar />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="/Service" element={<Service />}></Route>
        <Route path="/Project" element={<Project />}></Route>
        <Route path="/UHome" element={<UHome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
