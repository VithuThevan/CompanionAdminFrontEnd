import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Vehicle extends Component {
  state = {
    company: [],
    loading: true,
  };

  async componentDidMount() {
    //driver
    const res = await axios.get("http://127.0.0.1:8000/api/vehicle");
    console.log(res);
    this.setState({
      company: res.data.company,
      loading: false,
    });
  }

  deletecompany = async (e, id) => {
    const thisFlickDestroy = e.currentTarget;
    thisFlickDestroy.innerText = "Deleting";

    const res = await axios.delete(
      `http://127.0.0.1:8000/api/delete-vehicle/${id}`
    );
    if (res.data.status === 200) {
      thisFlickDestroy.closest("tr").remove();
      alert(res.data.message);
    }
  };

  render() {
    let company_HTML_Table, company_HTML_Table2;
    //company
    if (this.state.loading) {
      company_HTML_Table = (
        <tr>
          <td colSpan="8">
            <h2>Loading....</h2>
          </td>
        </tr>
      );
      company_HTML_Table2 = (
        <tr>
          <td colSpan="8">
            <h2>Loading....</h2>
          </td>
        </tr>
      );
    } else {
      company_HTML_Table = this.state.company.map((List) => {
        return (
          <tr key={List.id}>
            <td>{List.id}</td>
            <td>{List.NIC}</td>
            <td>{List.Name}</td>
            <td>{List.Address}</td>
            <td>{List.Contact_No}</td>
            <td>{List.Email}</td>
            <td>
              <Link
                to={`edit-vehicle/${List.id}`}
                className="btn btn-success btn-sm"
              >
                Edit
              </Link>
            </td>
            <td>
              <button
                type="button"
                onClick={(e) => this.deletecompany(e, List.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
      company_HTML_Table2 = this.state.company.map((List) => {
        return (
          <tr key={List.id}>
            <td>{List.id}</td>
            <td>{List.Vehicle_type}</td>
            <td>{List.Vehicle_brand}</td>
            <td>{List.Vehicle_color}</td>
            <td>{List.Vehicle_number}</td>
            <td>{List.Number_of_passenger}</td>
            <td>
              <Link
                to={`edit-vehicle/${List.id}`}
                className="btn btn-success btn-sm"
              >
                Edit
              </Link>
            </td>
            <td>
              <button
                type="button"
                onClick={(e) => this.deletecompany(e, List.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Details of Vehicles</h4>
              </div>
              <div className="card-body" style={{ overflow: "auto" }}>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Vehicle type</th>
                      <th>Vehicle brand</th>
                      <th>Vehicle color</th>
                      <th>Vehicle number</th>
                      <th>Number of Passengers</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>{company_HTML_Table2}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Vehicle;
