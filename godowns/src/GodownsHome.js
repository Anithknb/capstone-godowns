import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3030/data")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <div className="container ">
      <h1 className="centered">Welcome to Godowns page</h1>
      <p1 className="centered">
        We display the Godown list here, you can also add a new Godown by
        clicking add godown.
      </p1>
      <Link to="/create" className="btn btn-success">
        Add Godown
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Godown id</th>
            <th>Godown location</th>
            <th>Godown capacity</th>
            <th>Godown manager</th>
            <th>Start_date of Godown</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, input) => (
            <tr key={input}>
              <td>{data.id}</td>
              <td>{data.location}</td>
              <td>{data.capacity}</td>
              <td>{data.manager}</td>
              <td>{data.start_date}</td>
              <td>
                <Link
                  className="text-decoration-none btn btn-sm btn-success"
                  to={`/update/${data.id}`}
                >
                  Update
                </Link>
                <button
                  className="text-decoration-none btn btn-sm btn-danger"
                  onClick={(e) => handleDelete(data.id)}
                >
                  delete
                </button>
                <Link
                  className="text-decoration-none btn btn-sm btn-primary"
                  to={`/read/${data.id}`}
                >
                  Read
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function handleDelete(id) {
    const confirm = window.confirm("Do you like to Delete?");
    if (confirm) {
      axios.delete("http://localhost:3030/data/" + id).then((res) => {
        alert("Record Deleted");
        navigate("/");
      });
    }
  }
}

export default Home;
