import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Search({url, search}) {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(url + 'products/search.php?name=' + search)
        .then((response) => {
            const json = response.data;
            setProducts(json);
            console.log(json);
        }).catch(error => {
            if (error.response === undefined) {
                alert(error);
                  } else {
                    alert(error.response.data.error);
                  }
        })
    })

    return (
        <div className="container">
            {products.map(product => (
                <ul>
                    <li key={product.id}>
                        {product.name}, 
                        {product.price} €, 
                        <img src={url + 'img/' + product.image} alt="" />
                    </li>
                </ul>
            ))}
        </div>
    )
}
