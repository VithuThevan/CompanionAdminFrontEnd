//import "./styles.css";

import "./Sstyle.css";
import { useState, useEffect } from "react";

import axios from "axios";

export default function Complete() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/complete/`);
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

  return (
    <div className="App-complete">
      <h1 className="topic">Completed Orders</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}

      <ul>
        {data &&
          data.map(({ id, name, slocation, elocation }) => (
            <li key={id}>
              <div className="bx">
                <h5>id : {id}</h5>
                <h3>
                  Name : <span className="name">{name}</span>
                </h3>
                <h3>
                  Start Location: <span className="sloc">{slocation}</span>
                </h3>
                <h3>
                  End Location: <span className="eloc">{elocation}</span>
                </h3>
              </div>
            </li>
          ))}
        <br />
      </ul>
    </div>
  );
}
