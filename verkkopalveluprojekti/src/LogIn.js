import React from 'react'
import './LogIn.css';
import { Link } from 'react-router-dom'

export default function LogIn() {
    return (
        <div>
            <h1>Kirjaudu sisään</h1>
            <h3>Käyttäjänimi</h3>
            <input id="dd" type="text" />
            <h3>Salasana</h3>
            <input id="dd" type="text" />
            <a href='https://fi.pinterest.com/pin/388505905363209015/?d=t&mt=login' target="_blank">Etkö ole vielä asiakas? Rekisteröidy tästä! (kesken)</a>

        </div>
    )
}
