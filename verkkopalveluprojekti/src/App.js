import './App.css';
import { Switch, Route } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <div className="col-12">
        <h3>Tervetuloa verkkokauppaan!</h3>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
