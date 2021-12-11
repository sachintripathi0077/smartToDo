import "./App.css";
import React from "react";
import Home from "./Components/Home";
import Header from "./Components/Layout/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Toolbar from '@mui/material/Toolbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Toolbar/>
      <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route  path="dashboard" element={<Dashboard />} />
      </Routes>
      
    </div>
  );
}

export default App;
