import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Buy from "./pages/Buy";
import Dashboard from "./pages/Dashboard";
import Earn from "./pages/Earn";
import Home from "./pages/Home";
import StakeNFT from "./pages/StakeNFT";
import Mint from "./pages/Mint";
import Ecosystem from "./pages/Ecosystem";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/earn" element={<Earn/>}/>
        <Route path="/buy" element={<Buy/>}/>
        <Route path="/nft/mint" element={<Mint/>}/>
        <Route path="/nft/stakenft" element={<StakeNFT/>}/>
        <Route path="/ecosystem" element={<Ecosystem/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
