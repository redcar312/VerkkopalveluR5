import './App.css';
import { Routes, Route } from 'react-router-dom';
import {useState,useEffect} from "react";
import NavBar from './inc/NavBar';
import Footer from './inc/Footer';
import Home from './Home';
import AboutUs from './AboutUs';
import axios from 'axios';
import React from 'react';

const URL = "http://localhost/verkkopalveluprojekti_ryhma_5/";

function App() {
  const [category, setCategory] = useState(null);

  let location = useLocation();

  useEffect(()=> {
    if (location.state !==undefined) {
      setCategory({id: location.state.id,name:location.state.name});
    }
  },[location.state])

  return (
    <>
    <NavBar url={URL} setCategory={setCategory} />
    <div id="content" className="container-fluid">
      <Routes>
        <Route path="/" element={<Home url={URL} category={category} />} exact />
        <Route path="/aboutus" element={<AboutUs/>} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
