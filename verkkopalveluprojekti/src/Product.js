import React from 'react'
import './Product.css';


export default function Product({ product, url, addToCart }) {
    return (
        <div className="container">
                <h2>{product?.name}</h2>
                <div className="kuva">
                    <img className="image-fluid oneProductImage" src={url + 'img/' + product?.image} alt="" />
                    <p>{product?.price}€</p>
                    <button className="btn btn-warning addbutton" type="button" onClick={e => addToCart(product)}>Lisää Ostoskoriin</button>
                </div>
                <div class="kuva">
                
                <p className>a dataa kaikista usko_mattomista tuotteista Tähän tulee sitten hullua dataa kaikista usko_mattomista tuotteistaTähän tulee sitten hullua dataa kaikista usko_mattomista tuotteistaTähän tulee sitten hullua dataa kaikista usko_mattomista tuotteistaTähän tulee sitten hullua dataa kaikista usko_mattomista tuotteistaTähän tulee sitten hullua dataa kaikista usko_mattomista tuotteistaTähän tulee sitten hullua dataa kaikista usko_mattomista tuotteistaTähän tulee sitten hullua dataa kaikista usko_mattomista tuotteista</p>
                
                </div>
        </div>
    )
}
