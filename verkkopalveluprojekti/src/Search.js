import React from 'react'
import './App.css';

export default function Search() {
    return (
        <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Hae tuotetta nimellä" aria-label="Search" />
              <button className="btn btn-outline-secondary" type="submit">Hae</button>
        </form>
    )
}
