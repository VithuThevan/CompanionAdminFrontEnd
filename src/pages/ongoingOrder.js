//import "./styles.css";

import "./Sstyle.css";
import { useState, useEffect } from "react";

import axios from "axios";

export default function Ongoing() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/onorder/`);
        setData(response.data.vorder);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const Finished = (id, name, slocation, elocation, phone) => {
    console.log(id);
    axios
      .post("http://127.0.0.1:8000/api/add/complete", {
        name: name,
        slocation: slocation,
        elocation: elocation,
        mobile: phone,
      })
      .then((res) => console.log(res.data));

    axios
      .delete("http://127.0.0.1:8000/api/delete/ongoing/" + id)
      .then(() =>
        this.setState({
          status: "Delete from Ongoing order table successfully",
        })
      );
  };

  return (
    <div className="App-ongoing">
      <h1 className="topic">Ongoing Orders</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, name, slocation, elocation, mobile }) => (
            <li key={id}>
              <div className="bx">
                <h4>id : {id}</h4>
                <h3>
                  Name : <span className="name">{name}</span>
                </h3>
                <h3>
                  Start Location: <span className="sloc">{slocation}</span>
                </h3>
                <h3>
                  End Location: <span className="eloc">{elocation}</span>
                </h3>
                <button
                  className="btno"
                  onClick={() =>
                    Finished(id, name, slocation, elocation, mobile)
                  }
                >
                  Trip Finished
                </button>
              </div>
            </li>
          ))}
        <br />
      </ul>
    </div>
  );
}
