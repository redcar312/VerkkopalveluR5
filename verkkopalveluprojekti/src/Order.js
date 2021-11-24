import React from 'react'
import {useEffect, useState} from 'react'
import './Order.css'
import {createRef, setInputIndex} from 'react';
import uuid from 'react-uuid'

export default function Order({cart, updateAmount, removeFromCart}) {

    const [inputs, setInputs] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);

    useEffect(() => {
        for (let i = 0; i<cart.length; i++) {
            inputs[i] = createRef();
        }
    }, [cart.length])

    useEffect(() => {
        if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex.current] !== null) {
            inputs[inputIndex].current.focus();
        }
    }, [cart])

    function changeAmount(e, product, index) {
        updateAmount(e.target.value, product);
        setInputIndex(index);
    }

    return (
        <div className="container">
            <h3>Ostoskori</h3>
            {
                cart.map((product, index) => {
                    return(
                    <tr key ={uuid()}>
                        <td>{product.name}</td>
                        <td>{product.price} €</td>
                        <td>
                            <input className="amountInput"
                            ref= {inputs[index]}
                            type= "number" 
                            step= "1" 
                            min = "1"
                            onChange={ e => changeAmount(e, product, index)}
                            value={product.amount} 
                            />
                        </td>
                        <td><button className="btn btn-warning" onClick={() => removeFromCart(product)}>Poista</button></td>
                    </tr>
                    )
                })}
        <tr key={uuid()}>
            <td className="sumrow"></td>
            <td className="sumrow"></td>
            <td className="sumrow"></td>
            <td className="sumrow"></td>
        </tr>
        </div>
    )
}
