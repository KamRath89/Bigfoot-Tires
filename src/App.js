import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from './components/HomePage';
import Product1 from './components/Product1';
import Contact from './components/Contact';



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />

          <Routes>
            <Route exact path="/" element={<HomePage/>}></Route>
            <Route exact path="/product1" element={<Product1/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
            <Route exact path="/signin" elements={<Signin/>}></Route>
          </Routes>

        <Footer />
      </div>

    </Router>

  );
}

export default App;
