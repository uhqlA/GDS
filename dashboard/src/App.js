import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Map from "../src/components/Dashbooard/Maps/Maps"



function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
