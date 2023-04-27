import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
function Create() {
  const [inputData, setInputData] = useState({
    id: "",
    location: "",
    capacity: "",
    manager: "",
    start_date: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3030/data", inputData).then((res) => {
      alert("Data Posted Successfully!");
      navigate("/");
    });
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-yellow p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Enter the Godown Details here</h1>
            <label htmlFor="id">Godown id:</label>
            <input
              type="Number"
              name="id"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, id: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="location">location:</label>
            <input
              type="text"
              name="location"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, location: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="capacity">capacity:</label>
            <input
              type="Number"
              name="capacity"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, capacity: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="manager">manager:</label>
            <input
              type="text"
              name="manager"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, manager: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="start_date">start_date:</label>
            <input
              type="date"
              name="start_date"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, start_date: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
          <Link className="btn btn-info" to="/">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
