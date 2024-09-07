import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
      </Routes>
        {/* <Home /> */}
      </div>
    </Router>
  );
}

export default App;
