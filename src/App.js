import React, { useState } from "react";
import "./App.css";

function Godown() {
  const [godown, setgodown] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [godownId, setGodownId] = useState("");
  const [godownManager, setGodownManager] = useState("");
  const [godownLocation, setGodownLocation] = useState("");
  const [godownCapacity, setGodownCapacity] = useState("");
  const [godownStartDate, setGodownStartDate] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      !godownId ||
      !godownManager ||
      !godownLocation ||
      !godownCapacity ||
      !godownStartDate
    ) {
      alert("Please fill in all fields");
      return;
    }
  };

  return (
    <div className="container">
      <h1 className="centered">Welcome to Godowns page</h1>
      <p1 className="centered">
        We display the Godown list here, you can also add a new Godown by
        clicking add godown.
      </p1>
      <ul>
        {godown.map((godown) => (
          <li key={godown.id}>
            <div>
              <strong>ID:</strong> {godown.id}
            </div>
            <div>
              <strong>Manager:</strong> {godown.manager}
            </div>
            <div>
              <strong>Location:</strong> {godown.location}
            </div>
            <div>
              <strong>Capacity:</strong> {godown.capacity}
            </div>
            <div>
              <strong>Start Date:</strong> {godown.startDate}
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => setShowModal(true)}>Add Godown</button>
      {showModal && (
        <div className="modal">
          <div>
            <ul>
              {godown.map((godown) => (
                <li key={godown.godownId}>
                  {godown.godownId} - {godown.godownManager} -{" "}
                  {godown.godownLocation} - {godown.godownCapacity} -{" "}
                  {godown.godownStartDate}
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="godownId">Godown id:</label>
            <input
              type="text"
              id="godownId"
              value={godownId}
              onChange={(event) => setGodownId(event.target.value)}
            />
            <label htmlFor="godownManager">Godown Manager:</label>
            <input
              type="text"
              id="godownManager"
              value={godownManager}
              onChange={(event) => setGodownManager(event.target.value)}
            />
            <label htmlFor="godownLocation">Godown Location:</label>
            <input
              type="text"
              id="godownLocation"
              value={godownLocation}
              onChange={(event) => setGodownLocation(event.target.value)}
            />
            <label htmlFor="godownCapacity">Godown Capacity:</label>
            <input
              type="text"
              id="godownCapacity"
              value={godownCapacity}
              onChange={(event) => setGodownCapacity(event.target.value)}
            />
            <label htmlFor="godownStartDate">Godown Start Date:</label>
            <input
              type="text"
              id="godownStartDate"
              value={godownStartDate}
              onChange={(event) => setGodownStartDate(event.target.value)}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Godown;
