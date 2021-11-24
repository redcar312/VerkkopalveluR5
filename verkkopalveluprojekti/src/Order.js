import React from 'react'
import {useEffect} from 'react'
import './Order.css'

export default function Order({cart, updateAmount}) {

    function changeAmount(e, product) {
        updateAmount(e.target.value, product);
    }

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
                            <input className="amountInput"
                            type="number" 
                            step="1" 
                            onChange={ e => changeAmount(e, product)}
                            value={product.amount} 
                            />
                        </td>
                    </tr>
                    )
                })
            }
        </div>
    )
}
