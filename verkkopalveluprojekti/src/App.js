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
import Search from './Search';
import register from './register';

const URL = "http://localhost/verkkopalveluprojekti_ryhma_5/";

function App() {
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState(null);
  const [search, setSearch] = useState('');

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
      setProduct({id: location.state.id, name:location.state.name, price:location.state.price, image:location.state.image, info:location.state.info});
    } else if (location.pathname ==="/product") {
      setProduct({id: location.state.id, name:location.state.name, price:location.state.price, image:location.state.image, info:location.state.info});
    } else if (location.pathname === "/search") {
      setSearch(location.state.name);
    }
  }
  },[location.state])

  function addToCart(product) {
    if (cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.id === product.id);
      updateAmount(parseInt(existingProduct[0].amount) +1, product);
    } else {
      product["amount"] = 1;
      const newCart = [...cart,product];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
    }
  }

  function removeFromCart(product) {
    const itemsNotRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsNotRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsNotRemoved));
  }

  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item) => item.id === product.id);
    const modifiedCart = Object.assign([...cart], {[index]:product});
    setCart(modifiedCart);
    localStorage.setItem('cart', JSON.stringify(modifiedCart));
  }

  function emptyCart(){
    setCart([]);
    localStorage.removeItem('cart');
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
            product={product}
          />}
          exact
        />
        <Route path="/order" render={() =>
            <Order 
              url={URL}
              cart={cart}   
              empty = {emptyCart}  
              updateAmount = {updateAmount}
              removeFromCart = {removeFromCart}
            />
        } />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/login" component={LogIn} />
        <Route path="/register" component={register} />
        <Route path="/search" render={() =>
            
           <Search
              url = {URL}
              product = {product}
              search = {search}
            />
        } />
        <Route path="/product" render={() =>
            <Product
              url={URL}
              product={product}
              addToCart={addToCart}
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
