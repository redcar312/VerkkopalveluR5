import './App.css';
import { Switch, Route } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Footer from './Footer';
import image1 from './img/black.png'

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <div className="col-12">
        <h2>Tervetuloa verkkokauppaan!</h2>
        <p className="infoTeksti">
          Tervetuloa verkkokauppa Verkkokaupan sivustolle, toivottavasti tykkäät meidän hyvistä tuotteista!
        </p>
        <h3>Alennustuotteita ja tarjouksia:</h3>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={image1} height="500px" width="500px" className="d-block w-100 img-responsive" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image1} height="500px" width="500px" className="d-block w-100 img-responsive" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image1} height="500px" width="500px" className="d-block w-100 img-responsive" alt="..." /> 
          </div>
        </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
