import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./components/pages/Services";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import ContactUs from "./components/pages/ContactUs";
import SignUp from "./components/pages/SignUp";
import Marketing from "./components/pages/Marketing";
import Consulting from "./components/pages/Consulting";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/services" exact Component={Services} />
        <Route path="/products" exact Component={Products} />
        <Route path="/contact-us" exact Component={ContactUs} />
        <Route path="/sign-up" exact Component={SignUp} />
        <Route path="/marketing" exact Component={Marketing} />
        <Route path="/consulting" exact Component={Consulting} />
      </Routes>
    </Router>
  );
}

export default App;
