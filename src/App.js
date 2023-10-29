import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Buy from "./pages/Buy";
import Dashboard from "./pages/Dashboard";
import Earn from "./pages/Earn";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/earn" element={<Earn/>}/>
        <Route path="/buy" element={<Buy/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
