import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Student extends Component {
  state = {
    company: [],
    driver: [],
    loading: true,
  };

  async componentDidMount() {
    //company
    const res = await axios.get("http://127.0.0.1:8000/api/companys");
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
      `http://127.0.0.1:8000/api/delete-drivers/${id}`
    );
    if (res.data.status === 200) {
      thisFlickDestroy.closest("tr").remove();
      alert(res.data.message);
    }
  };

  render() {
    let company_HTML_Table;
    //company
    if (this.state.loading) {
      company_HTML_Table = (
        <tr>
          <td colSpan="7">
            <h2>Loading....</h2>
          </td>
        </tr>
      );
    } else {
      company_HTML_Table = this.state.company.map((List) => {
        return (
          <tr key={List.id}>
            <td>{List.id}</td>
            <td>{List.Name}</td>
            <td>{List.Address}</td>
            <td>{List.Contact_No}</td>
            <td>{List.Email}</td>
            <td>
              <Link
                to={`edit-student/${List.id}`}
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
                <h4>Details of Companies</h4>
                <Link
                  to={"add-student"}
                  className="btn btn-primary btn-sm float-end"
                >
                  Add student
                </Link>
              </div>
              <div className="card-body" style={{ overflow: "auto" }}>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Contact_No</th>
                      <th>Email</th>
                      <th>Edit</th>
                      <th>Delete</th>
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

export default Student;
