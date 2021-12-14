import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './App.css';

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
    }, [search])

    return (
        <div className="container">
            <h2>Haulla "{search}" löytyi:</h2>
            {products.map(product => (
                <ul>
                    <li className="col-12 searchProduct" key={product.id}>
                        <Link className="productLink"
                            to={{
                            pathname: '/product',
                            state: {
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            info: product.info
                            }
                            }}>{product.name}
                        </Link>
                        <p className="col-12">{product.price} €</p>
                        <Link className="col-12" to={{
                            pathname: '/product',
                            state: {
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                image: product.image,
                                info: product.info
                                }
                            }}>
                        <img className="img-fluid searchImage" src={url + 'img/' + product.image} alt="" />
                        <Link className="col-12 btn btn-warning showButton"
                            to={{
                            pathname: '/product',
                            state: {
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            info: product.info
                            }
                            }}
                            >
                            Näytä tuote
                        </Link>
                        </Link>
                    </li>
                </ul>
            ))}
        </div>
    )
}
