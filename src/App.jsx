import React from "react";
import FirstChapter from "./components/FirstChapter";
import NewColors from "./components/NewColors";
import ListRender from "./components/ListRender";
import ApiCall from "./components/ApiCall";
import ApiCallWithEffect from "./components/ApiCallWithEffect";
import BdayComp from "./components/BdayComp";
import AboutComp from "./components/Pages/AboutComp";
import ProductComp from "./components/Pages/ProductComp";
import ContactComp from "./components/Pages/ContactComp";
import ServiceComp from "./components/Pages/ServiceComp";
import HomeComp from "./components/Pages/HomeComp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import InputComp from "./components/InputComp";

function App(){
  return(
    <BrowserRouter>
        
      {/* <h1>What did we learn today?</h1>
      <FirstChapter/>

      <NewColors/>

      <br/>
      <br/>
      
      <ListRender/>

      <br/>
      <br/>*/}

      {/* <ApiCall/>  */}

      {/* <ApiCallWithEffect/> */}

      {/* <BdayComp/> */}

      
      <header>
        <div className="logo">  
        <img src="https://www.freepnglogos.com/uploads/logo-chatgpt-png/black-chatgpt-logo-circle-symbol-black-png-0.png" width={150} height={80}/>
        </div>
        <div className="mainmenu">
        <ul>
          <li className="navbar"><Link to="/">Home</Link></li>
          <li><Link className="navbar" to="/about">About</Link></li>
          <li><Link className="navbar" to="/products">Products</Link></li>
          <li><Link className="navbar" to="/services">Services</Link></li>
          <li><Link className="navbar" to="/contact">Contact</Link></li>
        </ul>
        </div>
        <div className="menubutton">
        <button>Get free Consultant</button>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/about" element = {<AboutComp/>} />
        <Route path="/products" element = {<ProductComp/>} />
        <Route path="/services" element = {<ServiceComp/>} />
        <Route path="/contact" element = {<ContactComp/>} />
      </Routes>
      <ProductComp/>
      <InputComp/>
    </BrowserRouter>
  );
}

export default App
