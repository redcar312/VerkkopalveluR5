import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {useState,useEffect} from "react";
import NavBar from './inc/NavBar';
import Footer from './inc/Footer';
import Home from './Home';
import AboutUs from './AboutUs';
import LogIn from './LogIn';
import React from 'react';
import Product from './Product';

const URL = "http://localhost/verkkopalveluprojekti_ryhma_5/";

function App() {
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  let location = useLocation();

  useEffect(()=> {
    if (location.state !== undefined) {
      if (location.pathname==="/") {
      setCategory({id: location.state.id, name:location.state.name});
    } else if (location.pathname ==="/product") {
      setProduct({id: location.state.id, name:location.state.name});
    }
  }
  },[location.state])

  return (
    <>
    <NavBar url={URL} setCategory={setCategory} />
    <div id="content" className="container-fluid">
      <Switch>
        <Route path="/" render={() =>
          <Home 
            url = {URL}
            category = {category}
          />}
          exact
        />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/login" component={LogIn} />
        <Route path="/product" render={() =>
            <Product
              url={URL}
              product={product}
            />
          }
        />
      </Switch>
    </div>
    <Footer />
    </>
  );
}

export default App;
