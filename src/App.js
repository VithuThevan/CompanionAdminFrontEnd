/*This page is to route all the web pages*/
import React from "react";
import { Route, HashRouter, NavLink, useHistory, Link } from "react-router-dom";
import "./App.css";
import "./navbar.css";
import driver from "./pages/driver";
import Student from "./pages/Student";
import Addstudent from "./pages/Addstudent";
import editstudent from "./pages/Editstudent";
import EditDriver from "./pages/EditDriver";
import Orders from "./pages/Orders";
import VehicleOwner from "./pages/vehicle_owner";
import editvehicle from "./pages/editvehicle";
import pic2 from "./companion2.jpeg";
import pic1 from "./companion.jpeg";
import EditVehicleOwner from "./pages/editvehicleowner";
import Vehicle from "./pages/vehicle";
import payment from "./pages/payment";
import payment2 from "./pages/payment2";
import payment1 from "./pages/payment1";
import axios from "axios";
import "react-dropdown/style.css";

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
// axios.defaults.withCredentials=true;

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${pic2})`,
        backgroundSize: "cover",
        height: "120vh",
        width: "100%",
        backgroundColor: "red",
      }}
    >
      <HashRouter>
        <nav className="navbar">
          <div className="driver1">
            <img src={pic1} alt="Companion Logo" width="200px" height="55px" />
          </div>
          <div className="driver">
            <NavLink to="/payment">Unapproved Payments</NavLink>
          </div>
          <div className="driver">
            <NavLink to="/payment1">Approved Payments</NavLink>
          </div>
          <div className="driver">
            <NavLink to="/payment2">Rejected Payments</NavLink>
          </div>
          <div className="driver">
            <NavLink to="/">Companies</NavLink>
          </div>
          <div className="driver">
            <NavLink to="/driver">Drivers</NavLink>
          </div>
          <div className="driver">
            <NavLink to="/VehicleOwner">Vehicle Owners</NavLink>
          </div>
          <div className="driver">
            <NavLink to="/Vehicle">Vehicles</NavLink>
          </div>
          <div className="driver">
            <NavLink to="/orders">Orders</NavLink>
          </div>
        </nav>
        <br />
        <div className="content">
          <Route exact path="/" component={Student} />
          <Route path="/add-student" component={Addstudent} />
          <Route path="/edit-student/:id" component={editstudent} />

          <Route path="/edit-driver/:id" component={EditDriver} />
          <Route path="/driver" component={driver} />

          <Route path="/orders" component={Orders} />

          <Route path="/vehicle" component={Vehicle} />
          <Route path="/edit-vehicle/:id" component={editvehicle} />

          <Route path="/payment" component={payment} />
          <Route path="/payment1" component={payment1} />
          <Route path="/payment2" component={payment2} />

          <Route path="/VehicleOwner" component={VehicleOwner} />
          <Route path="/edit-vehicleowner1/:id" component={EditVehicleOwner} />

          <Route path="/login" component={EditVehicleOwner} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
