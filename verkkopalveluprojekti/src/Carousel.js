import React, { useState, useEffect } from 'react';
import axios from 'axios';
import image1 from "./img/black.png";
import image2 from './img/VoimaCarousel.png';

export default function Carousel({url, product}) {
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        axios.get(url + 'products/carouselProducts.php'
        ).then((response) => {
          const json = response.data;
          setCarousel(json);
          console.log(json);
        }).catch(error => {
          if (error.response === undefined) {
            alert(error);
          } else {
            alert(error.response.data.error);
          }
        })
      }, [product])

    return (
      <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image2} className="d-block img-fluid" alt="..." />
          </div>
          {carousel.map(item => (
            <div key={item.id} className="carousel-item">
              <img className="d-block img-fluid" src={url + 'img/' + item.image} />
              <p>{item.name}, {item.price} €</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}
