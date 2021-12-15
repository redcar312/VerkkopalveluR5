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
                        <div>
                        <Link to={{
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
                        </Link>
                        </div>
                        <div>
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
                            }}>Tuote: {product.name}
                        </Link>
                        </div>
                        <div>Hinta: {product.price} €</div>
                        <div>
                        <Link className="btn btn-warning showButton"
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
                        </div>
                    </li>
                </ul>
            ))}
        </div>
    )
}
