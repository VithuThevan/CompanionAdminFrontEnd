import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class payment extends Component {
  state = {
    company: [],
    loading: true,
  };

  async componentDidMount() {
    //driver
    const res = await axios.get("http://127.0.0.1:8000/api/payment");
    console.log(res);
    this.setState({
      company: res.data.company,
      loading: false,
    });
  }

  rejectcompany = async (e, id) => {
    const thisFlickDestroy = e.currentTarget;
    thisFlickDestroy.innerText = "rejecting";

    const res = await axios.post(
      `http://127.0.0.1:8000/api/reject-payment/${id}`
    );
    if (res.data.status === 200) {
      thisFlickDestroy.closest("tr").remove();
    }
  };

  acceptcompany = async (e, id) => {
    const thisFlickDestroy = e.currentTarget;
    thisFlickDestroy.innerText = "approving";

    const res = await axios.post(
      `http://127.0.0.1:8000/api/accept-payment/${id}`
    );
    if (res.data.status === 200) {
      thisFlickDestroy.closest("tr").remove();
    }
  };

  render() {
    let company_HTML_Table;
    //company
    if (this.state.loading) {
      company_HTML_Table = (
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
            <td>{List.name}</td>
            <td>{List.slocation}</td>
            <td>{List.elocation}</td>
            <td>{List.DistanceTravelled}</td>
            <td></td>
            {/* <td>{List.File}</td> */}
            <td>
              <img
                src={`http://127.0.0.1:8000/${List.File}`}
                width="100px"
                alt="payment slip"
              ></img>
              <a href={`http://127.0.0.1:8000/${List.File}`} download={"Photo"}>
                <br />
                <br />
                <button className="btn btn-primary btn-sm">View</button>
              </a>
            </td>
            <td>
              <button
                type="button"
                onClick={(e) => this.acceptcompany(e, List.id)}
                className="btn btn-success btn-sm"
              >
                Approve
              </button>
              <br />
              <br />
              <button
                type="button"
                onClick={(e) => this.rejectcompany(e, List.id)}
                className="btn btn-danger btn-sm"
              >
                Reject
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
                <h4>Details of Unapproved Payments</h4>
              </div>
              <div className="card-body" style={{ overflow: "auto" }}>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Company</th>
                      <th>Start Location</th>
                      <th>End Location</th>
                      <th>Distance Travelled</th>
                      <th>Fare</th>
                      <th>Image</th>
                      <th>Approve</th>
                    </tr>
                  </thead>
                  <tbody>{company_HTML_Table}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default payment;
