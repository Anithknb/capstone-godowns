import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./CreateGodowns";
import Home from "./GodownsHome";
import Read from "./ReadGodowns";
import Update from "./UpdateGodowns";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
