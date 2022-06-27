/*This page is to route all the web pages*/
import React from "react";
import { Route, HashRouter, NavLink } from "react-router-dom";
import "./App.css";
import "./navbar.css";
import driver from "./pages/driver";
import Student from "./pages/Student";
import Addstudent from "./pages/Addstudent";
import Editstudent from "./pages/Editstudent";
import EditDriver from "./pages/EditDriver";
import Orders from "./pages/Orders";
import VehicleOwner from "./pages/vehicle_owner";
import editvehicle from "./pages/editvehicle";
import pic2 from "./companion2.jpeg";
import pic1 from "./companion.jpeg";
import editvehicleowner from "./pages/editvehicleowner";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${pic2})`,
        backgroundSize: "cover",
        height: "120vh",
        backgroundColor: "red",
      }}
    >
      <HashRouter>
        <div className="navbar">
          <div className="driver1">
            <img src={pic1} alt="Companion Logo" width="200px" height="55px" />
          </div>
          <div className="driver">
            <NavLink to="/">Company</NavLink>
          </div>
          <div className="driver">
            <NavLink to="/driver">Driver</NavLink>
          </div>
          <div className="driver">
            <NavLink to="/VehicleOwner">Vehicle</NavLink>
          </div>
          <div className="driver">
            <NavLink to="/orders">Orders</NavLink>
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
          <Route path="/VehicleOwner" component={VehicleOwner} />
          <Route path="/edit-vehicleowner/:id" component={editvehicleowner} />
          <Route path="/edit-vehicleowner1/:id" component={editvehicleowner} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
