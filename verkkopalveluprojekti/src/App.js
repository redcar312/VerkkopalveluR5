import './App.css';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap';
import axios from 'axios';

function App() {
  return (
    <div className="container">
      <div className="col-6">
        <h3>Etusivu</h3>
        <button className="btn btn-primary">Test</button>
      </div>
    </div>
  );
}

export default App;
