import React from 'react'

export default function Product({product}) {
    return (
        <div className="container-fluid">
            <div className="col-12">
                {product?.name}
            </div>
        </div>
    )
}
