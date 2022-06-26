/*This page is to route all the web pages*/
import React from "react";
import { Route, HashRouter, NavLink } from "react-router-dom";
import "./App.css";
import driver from "./pages/driver";
import Student from "./pages/Student";
import Addstudent from "./pages/Addstudent";
import Editstudent from "./pages/Editstudent";
import EditDriver from "./pages/EditDriver";
import "./navbar.css";
import pic1 from "./companion.jpeg";
import Orders from "./pages/Orders";
import Vehicleowner from "./pages/vehicle_owner";

function App() {
  return (
    <HashRouter>
      <div className="navbar">
        <div className="driver1">
          <img src={pic1} alt="Companion Logo" width="200px" height="100%" />
        </div>
        <div className="driver">
          <NavLink to="/">Company</NavLink>
        </div>
        <div className="driver">
          <NavLink to="/driver">Driver</NavLink>
        </div>
        <div className="driver">
          <NavLink to="/orders">Orders</NavLink>
        </div>
        <div className="driver">
          <NavLink to="/VehicleOwner">Vehicle_Owners</NavLink>
        </div>
      </div>
      <br />
      <div className="content">
        <Route exact path="/" component={Student} />
        <Route path="/add-student" component={Addstudent} />
        <Route path="/edit-student/:id" component={Editstudent} />
        <Route path="/edit-driver/:id" component={EditDriver} />
        <Route path="/driver" component={driver} />
        <Route path="/orders" component={Orders} />
        <Route path="/VehicleOwner" component={Vehicleowner} />
      </div>
    </HashRouter>
  );
}

export default App;
