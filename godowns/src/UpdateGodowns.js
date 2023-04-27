import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Update() {
  const { id } = useParams();

  const [inputData, setInputData] = useState({
    id: id,
    location: "",
    capacity: "",
    manager: "",
    start_date: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3030/data/" + id)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("http://localhost:3030/data/" + id, inputData).then((res) => {
      alert("Data Updated Successfully!");
      navigate("/");
    });
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="id">ID:</label>
            <input
              type="number"
              disabled
              name="id"
              className="form-control"
              value={inputData.id}
            />
          </div>
          <div>
            <label htmlFor="location">location:</label>
            <input
              type="text"
              name="location"
              className="form-control"
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, location: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="capacity">capacity:</label>
            <input
              type="number"
              name="capacity"
              className="form-control"
              value={inputData.capacity}
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
              value={inputData.manager}
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
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, start_date: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
          <Link className="btn btn-info" to="/">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
