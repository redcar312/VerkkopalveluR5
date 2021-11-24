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
import Order from './Order';

const URL = "http://localhost/verkkopalveluprojekti_ryhma_5/";

function App() {
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState([])

  const [product, setProduct] = useState(null);
  let location = useLocation();

  useEffect(()=> {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  useEffect(()=> {
    if (location.state !== undefined) {
      if (location.pathname==="/") {
      setCategory({id: location.state.id, name:location.state.name, price:location.state.price, image:location.state.image});
    } else if (location.pathname ==="/product") {
      setProduct({id: location.state.id, name:location.state.name, price:location.state.price, image:location.state.image});
    }
  }
  },[location.state])

  function addToCart(product) {
    product["amount"] = 1;
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }

  function removeFromCart(product) {
    const itemsNotRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsNotRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsNotRemoved));
  }

  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item) => item.id === product.id);
  }

  return (
    <>
    <NavBar url={URL} setCategory={setCategory} cart={cart} />
    <div id="content" className="container-fluid">
      <Switch>
        <Route path="/" render={() =>
          <Home 
            url = {URL}
            category = {category}
            addToCart={addToCart}
          />}
          exact
        />
        <Route path="/order" render={() =>
            <Order 
              url={URL}
              cart={cart}     
              removeFromCart = {removeFromCart}
            />
        } />
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
