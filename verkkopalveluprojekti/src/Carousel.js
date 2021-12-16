import React, { useState, useEffect } from 'react';
import axios from 'axios';
import image1 from "./img/black.png";

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
        <div className="col-12">
          <div
            id='carouselExampleControls'
            className='carousel slide col-12'
            data-bs-ride='carousel'
          >
              <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img
                  src={image1}
                  height='500px'
                  width='250px'
                  className='d-block w-100 img-responsive'
                  alt='...'
                />
              </div>
              {carousel.map(card => (
                <div key={card.id} className='carousel-item'>
                    <img className="d-block w-100 img-responsive"
                        height='500px'
                        width='250px'
                        src={url + 'img/' + card.image} 
                        alt="" />
                    <p>{card.name}, {card.price} €</p>
                </div>
              ))}
              </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleControls'
              data-bs-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleControls'
              data-bs-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
    )
}
