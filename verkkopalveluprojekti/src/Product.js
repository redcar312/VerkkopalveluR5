import React from 'react'

export default function Product({product}) {
    return (
        <div className="container-fluid">
            <div className="col-12">
            <p>{product?.name}</p>
            <p>{product?.price}€</p>
            </div>
        </div>
    )
}
