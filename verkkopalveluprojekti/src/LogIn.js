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
            <Link to="/register">Etkö ole vielä asiakas? Rekisteröidy tästä! (kesken) </Link>
        </div>
    )
}
