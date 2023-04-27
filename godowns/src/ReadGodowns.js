import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
function Read() {
  const { id } = useParams();
  //const navigate = useNavigate();
  const [Data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/data/" + id)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="container">
      <div className="container p-5">
        <p>{Data.id}</p>
        <p>{Data.location}</p>
        <p>{Data.capacity}</p>
        <p>{Data.manager}</p>
        <p>{Data.start_date}</p>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

export default Read;
