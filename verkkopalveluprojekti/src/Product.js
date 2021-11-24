import React from 'react'


export default function Product({product, url, addToCart}) {
    return (
        <div className="container-fluid">
            <div className="col-12">
            <p>{product?.name}</p>
            <div>
                  <img src={url + 'img/' + product?.image} alt="" />
            </div>
            <p>{product?.price}€</p>
            <button className="btn btn-warning addbutton" type="button" onClick={e => addToCart(product)}>Lisää</button>
            </div>
        </div>
    )
}
