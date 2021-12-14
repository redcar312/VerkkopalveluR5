import React from 'react'
import './Product.css';


export default function Product({ product, url, addToCart }) {

    return (
        <div className="container">
                <h2>{product?.name}</h2>
                <div className="kuva">
                    <img className="image-fluid oneProductImage" src={url + 'img/' + product?.image} alt="" />
                    <p className="productInfo">{product?.price}€</p>
                    <p className="productInfo">{product?.info}</p>
                    <button className="btn btn-warning addbutton" type="button" onClick={e => addToCart(product)}>Lisää Ostoskoriin</button>
                </div>
                <div className="kuva">
                </div>
        </div>
    )
}
