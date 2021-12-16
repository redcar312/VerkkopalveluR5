import React from 'react'
import './LogIn.css';
import { Link } from 'react-router-dom'

export default function LogIn() {
    return (
        <div className='container'>
            <h1>Kirjaudu sisään</h1>
            <h4>Käyttäjänimi</h4>
            <input id="dd" type="text" />
            <h4>Salasana</h4>
            <input id="dd" type="text" />
            <div class="row">
            <Link to="/register">Etkö ole vielä asiakas? Rekisteröidy tästä!</Link>
            </div>
        </div>
    )
}
