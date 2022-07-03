import axios from "axios";
import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";
import "../App.css";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class editstudent extends Component {
  state = {
    name: "",
    address: "",
    contact_no: "",
    email: "",
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
      `http://127.0.0.1:8000/api/edit-company/${stud_id.id}`
    );
    if (res.data.status === 200) {
      this.setState({
        name: res.data.driver[0].Company_Name,
        address: res.data.driver[0].Company_Address,
        contact_no: res.data.driver[0].Company_Number,
        email: res.data.driver[0].Company_Email,
      });
    }
  }

  UpdateStudent = async (e) => {
    e.preventDefault();
    let stud_id = this.props.params;
    const res = await axios.post(
      `http://127.0.0.1:8000/api/update-company/${stud_id.id}`,
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      swal({
        title: "Success!",
        text: res.data.message,
        button: "Ok!",
      });
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Edit Company Details</h4>
                <Link to={"/"} className="btn btn-primary btn-sm float-end">
                  BACK
                </Link>
              </div>
              <div className="card-body">
                <form onSubmit={this.UpdateStudent}>
                  <div className="form-group mb-3">
                    <label>Company Name</label>
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
                    <label>Company Address</label>
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
                    <label>Contact No</label>
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
                    <button type="submit" className="btn btn-primary">
                      Update Company
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

export default withParams(editstudent);
