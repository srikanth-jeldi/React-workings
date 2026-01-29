import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Vehicle from "./pages/Vehicle";
import SellCar from "./pages/SellCar";
import Financing from "./pages/Financing";
import Contact from "./pages/Contact";
import "./styles/App.css";

const App = () => (
  <div className="app">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/inventory/:id" element={<Vehicle />} />
      <Route path="/sell" element={<SellCar />} />
      <Route path="/financing" element={<Financing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
