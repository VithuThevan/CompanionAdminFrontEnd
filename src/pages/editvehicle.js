import axios from "axios";
import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";
import "../App.css";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class EditDriver extends Component {
  state = {
    vehicle_type: "",
    vehicle_brand: "",
    vehicle_color: "",
    vehicle_number: "",
    numberofpassenger: "",
    error_list: [],
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  async componentDidMount() {
    let stud_id = this.props.params;
    const res = await axios.get(
      `http://127.0.0.1:8000/api/edit-drivers/${stud_id.id}`
    );
    if (res.data.status === 200) {
      this.setState({
        vehicle_type: res.data.driver[0].Vehicle_type,
        vehicle_brand: res.data.driver[0].Vehicle_brand,
        vehicle_color: res.data.driver[0].Vehicle_color,
        vehicle_number: res.data.driver[0].Vehicle_number,
        numberofpassenger: res.data.driver[0].Numberofpassenger,
      });
    }
  }

  UpdateStudent = async (e) => {
    e.preventDefault();
    let stud_id = this.props.params;
    const res = await axios.post(
      `http://127.0.0.1:8000/api/update-drivers/${stud_id.id}`,
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      swal({
        title: "Success!",
        text: res.data.message,
        button: "Ok!",
      });
      this.props.history.push("/VehicleOwner");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Edit Driver Details</h4>
                <Link to={"/VehicleOwner"} className="btn btn-primary btn-sm float-end">
                  BACK
                </Link>
              </div>
              <div className="card-body">
                <form onSubmit={this.UpdateStudent}>
                  <div className="form-group mb-3">
                    <label>vehicle_type</label>
                    <input
                      type="text"
                      id="name"
                      name="vehicle_type"
                      pattern="[A-Za-z0-9]+"
                      onChange={this.handleInput}
                      value={this.state.vehicle_type}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>vehicle_brand</label>
                    <input
                      type="text"
                      id="address"
                      name="vehicle_brand"
                      onChange={this.handleInput}
                      value={this.state.vehicle_brand}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>vehicle_color</label>
                    <input
                      type="tel"
                      id="contact_no"
                      name="vehicle_color"
                    //   pattern="[0-9]{10}"
                      onChange={this.handleInput}
                      value={this.state.vehicle_color}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>vehicle_number</label>
                    <input
                      type="text"
                      id="email"
                      name="vehicle_number"
                    //   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      onChange={this.handleInput}
                      value={this.state.vehicle_number}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>numberofpassenger</label>
                    <input
                      type="text"
                      id="nic"
                      name="numberofpassenger"
                      onChange={this.handleInput}
                      value={this.state.numberofpassenger}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">
                      Update Vehicle
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(EditDriver);
