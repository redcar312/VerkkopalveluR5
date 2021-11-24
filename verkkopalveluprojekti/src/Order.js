import React from 'react'
import {useEffect} from 'react'
import './Order.css'

export default function Order({cart}) {

    useEffect(() => {
        console.log(cart);
    }, []);

    return (
        <div className="container">
            <h3>Ostoskori</h3>
            {
                cart.map((product) => {
                    return(
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.price} €</td>
                        <td>
                            <input className="amountInput" type="number" step="1" value={product.amount} />
                        </td>
                    </tr>
                    )
                })
            }
        </div>
    )
}
