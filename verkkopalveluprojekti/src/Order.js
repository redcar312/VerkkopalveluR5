import React from 'react'
import {useEffect, useState} from 'react'
import './Order.css'
import {createRef, setInputIndex} from 'react';
import uuid from 'react-uuid'

export default function Order({url, cart, updateAmount, removeFromCart, empty}) {
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

    useEffect(() => {
        console.log(cart);
    })

    function order(e) {
        e.preventDefault();
        fetch(url + 'order/add.php' , {
            method: 'POST' ,
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                address: address,
                zip: zip,
                city: city,
                cart: cart
            })
        })
        .then (res => {
            return res.json();
        })
        .then (
            (res) => {
                empty();
                setFinished(true);
            }, (error) => {
                alert(error);
            }
        )
    }

    if (finished === false) {
        return (
            <div className="container">
                    <div>
                        <h3>Ostoskori</h3>
                        <table>
                            <tbody>
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
                                    <td>{product.price * product.amount} €</td>
                                    <td><button className="btn btn-warning" onClick={() => removeFromCart(product)}>Poista</button></td>
                                </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    <table>
                    <tbody>
                    <tr key={uuid()}>
                        <td className="sumrow"></td>
                        <td className="sumrow"></td>
                        <td className="sumrow"></td>
                        <td className="sumrow">Yhteensä: </td>
                        <td className="sumrow">{sumAll.toFixed(2)} €</td>
                        <td className="sumrow"><button className="btn btn-danger" onClick={() => empty()}>Tyhjennä ostoskori</button></td>
                    </tr>
                    </tbody>
                    </table>    
                    </div>
                

                {cart.length > 0 && // render order from if there is something in the cart
                    <>
                    <h3 className= "header">Asiakkaan tiedot</h3>
                    <form className="orderFormGroup" onSubmit={order}>
                        <div className="form-group">
                            <label className="orderForm">Etunimi:</label>
                            <input className="form-control orderForm" onChange={e => setFirstname(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label className="orderForm">Sukunimi:</label>
                            <input className="form-control orderForm" onChange={e => setLastname(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label className="orderForm">Osoite:</label>
                            <input className="form-control orderForm" onChange={e => setAddress(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label className="orderForm">Postinumero:</label>
                            <input className="form-control orderForm" onChange={e => setZip(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label className="orderForm">Postitoimipaikka:</label>
                            <input className="form-control orderForm" onChange={e => setCity(e.target.value)}/>
                        </div>
                        <div className="buttons">
                            <button className="btn btn-warning orderButton">Tilaa</button>
                        </div>
                    </form>
                    </>
                } 
            </div>
        )
    } else {
        return (
            <div className="container">
                <h3>Kiitos tilauksestasi!</h3>
            </div>
        )
    }
}
