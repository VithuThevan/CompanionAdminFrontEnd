import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

class Addstudent extends Component {
  //data types of input data
  state = {
    name: "",
    address: "",
    contact_no: "",
    error_list: [],
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveStudent = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://127.0.0.1:8000/api/add-student",
      this.state
    );

    if (res.data.status === 200) {
      console.log(res.data.message);

      swal({
        title: "Success!",
        text: res.data.message,
        icon: "success",
        button: "Ok!",
      });

      this.props.history.push("/");

      this.setState({
        name: "",
        address: "",
        contact_no: "",
      });
    } else {
      this.setState({
        error_list: res.data.validate_err,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Edit Students</h4>
                <Link to={"/"} className="btn btn-primary btn-sm float-end">
                  BACK
                </Link>
              </div>
              <div className="card-body">
                <form onSubmit={this.saveStudent}>
                  <div className="form-group mb-3">
                    <label>Company Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={this.handleInput}
                      value={this.state.name}
                      className="form-control"
                      required
                    />
                    <span className="text-danger">
                      {this.state.error_list.name}
                    </span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Company Address</label>
                    <input
                      type="text"
                      name="address"
                      onChange={this.handleInput}
                      value={this.state.address}
                      className="form-control"
                      required
                    />
                    <span className="text-danger">
                      {this.state.error_list.course}
                    </span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Contact_No</label>
                    <input
                      type="text"
                      name="contact_no"
                      onChange={this.handleInput}
                      value={this.state.contact_no}
                      className="form-control"
                      required
                    />
                    <span className="text-danger">
                      {this.state.error_list.email}
                    </span>
                  </div>
                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">
                      Save Student
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> //
    );
  }
}

export default Addstudent;
