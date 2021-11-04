import './App.css';
import { Switch, Route } from 'react-router-dom';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button, { Nav } from 'react-bootstrap';
import axios from 'axios';
import NavBar from './NavBar'

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <div className="col-6">
        <h3>Etusivu</h3>
        <button className="btn btn-primary">Test</button>
      </div>
    </div>
    </>
  );
}

export default App;
