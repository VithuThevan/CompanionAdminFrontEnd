import axios from "axios";
import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";
import "../App.css";
import "../vehicle.css";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class EditVehicleOwner extends Component {
  state = {
    name: "",
    address: "",
    contact_no: "",
    email: "",
    nic: "",
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
      `http://127.0.0.1:8000/api/edit-vehicleowner/${stud_id.id}`
    );
    if (res.data.status === 200) {
      this.setState({
        name: res.data.driver[0].Name,
        address: res.data.driver[0].Address,
        contact_no: res.data.driver[0].Contact_No,
        email: res.data.driver[0].Email,
        nic: res.data.driver[0].NIC,
        });
    }
  }

  UpdateStudent = async (e) => {
    e.preventDefault();
    let stud_id = this.props.params;
    const res = await axios.post(
      `http://127.0.0.1:8000/api/update-vehicleowner/${stud_id.id}`,
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
                <h4>Edit Vehicle Owner Details</h4>
                <Link
                  to={"/VehicleOwner"}
                  className="btn btn-primary btn-sm float-end"
                >
                  BACK
                </Link>
              </div>
              <div className="card-body" style={{ height: "600px" }}>
                <form onSubmit={this.UpdateStudent}>
                  
                      <div className="form-group mb-3">
                        <label>Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          pattern="([A-z0-9À-ž\s]){3,}"
                          onChange={this.handleInput}
                          value={this.state.name}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label>Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          onChange={this.handleInput}
                          value={this.state.address}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label>Contact_No</label>
                        <input
                          type="tel"
                          id="contact_no"
                          name="contact_no"
                          pattern="[0-9]{10}"
                          onChange={this.handleInput}
                          value={this.state.contact_no}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label>Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          onChange={this.handleInput}
                          value={this.state.email}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label>NIC</label>
                        <input
                          type="text"
                          id="nic"
                          name="nic"
                          onChange={this.handleInput}
                          value={this.state.nic}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <button type="submit" className="btn btn-primary">
                          Update Vehicle Owner
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

export default withParams(EditVehicleOwner);
