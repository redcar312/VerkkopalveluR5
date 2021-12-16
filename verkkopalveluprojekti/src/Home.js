import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './App.css'
import Carousel from './Carousel'

export default function Home({ url, category, product, addToCart }) {
  const [products, setProducts] = useState([]);
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    if (category !== null) {
      const address = url + 'products/allproducts.php/' + category?.id;

      axios.get(address)
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
    }
  }, [category])

  return (
    <div className='container'>
      <div className='col-12'>
        <h2>Tervetuloa Voimaan!</h2>
        <p className='infoTeksti'>
          Tervetuloa verkkokauppa Voiman sivustolle, toivottavasti tykkäät
          meidän hyvistä tuotteista!
        </p>
          <div>
            <h3>Tuotteita ryhmästä {category?.name}</h3>
            {products.map(product => (
              <div key={product.id} className=" col-lg-2 col-md-4 col-sm-12 products">

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
                  }}
                >
                {product.name}
                </Link>

                <p>{product.price}€</p>
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
                <div>
                  <img className="img-fluid homeImage" src={url + 'img/' + product.image} alt="" />
                </div>
                </Link>
                <button className="btn btn-warning addbutton" type="button" onClick={e => addToCart(product)}>Lisää</button>
              </div>
            ))}
          </div>
        <h3>Suosittuja tuotteita:</h3>
        <div className="carouselAlign">
          <Carousel url={url} product={product} />
        </div>
      </div>
    </div>
  )
}
