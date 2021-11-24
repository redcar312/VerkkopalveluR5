import React from 'react'

export default function Product({product, url}) {
    return (
        <div className="container-fluid">
            <div className="col-12">
            <p>{product?.name}</p>
            <div>
                  <img src={url + 'img/' + product?.image} alt="" />
            </div>
            <p>{product?.price}€</p>

            </div>
        </div>
    )
}
