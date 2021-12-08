import React from 'react'
import './Product.css';


export default function Product({ product, url, addToCart }) {
    return (
        <div className="container">
            <div className="col-12">
                <h2>{product?.name}</h2>
                <div className="kuva">
                    <img className="image-fluid oneProductImage" src={url + 'img/' + product?.image} alt="" />
                </div>
                <p className='infoTeksti'>{product?.price}€</p>
                <p className='infoTeksti'>Tähän tulee sitten hullua dataa kaikista usko_mattomista tuotteista</p>
                <div class="kuva">
                    <button className="btn btn-warning addbutton" type="button" onClick={e => addToCart(product)}>Lisää Ostoskoriin</button>
                </div>
            </div>
        </div>
    )
}
