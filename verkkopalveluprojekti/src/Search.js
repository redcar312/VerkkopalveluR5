import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Search({url}) {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(url + 'products/search.php')
        .then((response) => {
            const json = response.data;
            setProducts(json);
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
            <p>Haista vittu</p>
        </div>
    )
}
