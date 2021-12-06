import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Search({url}) {
    const[products, setProducts] = useState([]);
    const[productName, setProductName] = useState('');

    useEffect(() => {
        setProductName("Läppäri");
    })

    useEffect(() => {
        axios.get(url + 'products/search.php', {
            params: {
                name: productName
            }
        })
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
                <ul key={product.id} className="searchItems">
                    <li>{product.name}</li>
                    <li>{product.price} €</li>
                </ul>
            ))}
        </div>
    )
}
