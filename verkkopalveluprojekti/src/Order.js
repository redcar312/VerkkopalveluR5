import React from 'react'
import {useEffect} from 'react'

export default function Order({cart}) {

    useEffect(() => {
        console.log(cart);
    }, []);

    return (
        <div>
            <h3>Ostoskori</h3>
            {
                cart.map((product) => {
                    <p>{product.name}</p>
                })
            }
        </div>
    )
}
