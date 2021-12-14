import React from 'react'
import {useEffect, useState} from 'react'
import './Order.css'
import {createRef, setInputIndex} from 'react';
import uuid from 'react-uuid'

export default function Order({url, cart, updateAmount, removeFromCart}) {
    const [inputs, setInputs] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);
    let sumAll = 0;
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');
    const [finished, setFinished] = useState(false);

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

    function productSum(price, amount) {
        let sum = price * amount;
        return sum.toFixed(2);
    }

    if (finished === false) {
        return (
            <div>
                    <div className="container">
                        <h3>Ostoskori</h3>
                        {
                            cart.map((product, index) => {
                                sumAll += parseFloat(product.price) * product.amount;
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
                                        onChange={e => changeAmount(e, product, index)}
                                        value={product.amount} 
                                        />
                                    </td>
                                    <td> = </td>
                                    <td>{productSum(product.price, product.amount)} €</td>
                                    <td><button className="btn btn-warning" onClick={() => removeFromCart(product)}>Poista</button></td>
                                </tr>
                                )
                            })}
                    <tr key={uuid()}>
                        <td className="sumrow"></td>
                        <td className="sumrow"></td>
                        <td className="sumrow"></td>
                        <td className="sumrow">Yhteensä: </td>
                        <td className="sumrow">{sumAll.toFixed(2)} €</td>
                    </tr>
                    </div>
                )

                {cart.length > 0 && // render order from if there is something in the cart
                    <>
                    <h3 className= "header">Client Infromation</h3>
                    <form onSubmit={Order}>
                        <div className="form-group">
                            <label>First Name:</label>
                            <input className="form-control" onChange={e => setFirstname(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input className="form-control" onChange={e => setLastname(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Address:</label>
                            <input className="form-control" onChange={e => setAddress(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Postal code:</label>
                            <input className="form-control" onChange={e => setZip(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>City:</label>
                            <input className="form-control" onChange={e => setCity(e.target.value)}/>
                        </div>
                        <div className="buttons">
                            <button className="btn-btn primary">Order</button>
                        </div>
                    </form>
                    </>
                }
            </div>
        )
    }
}
