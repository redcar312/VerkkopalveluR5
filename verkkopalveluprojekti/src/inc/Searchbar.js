import React from 'react'
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Searchbar(searchName) {
    const[search, setSearch] = useState('');

    return (
        <form className="d-flex">
              <input className="form-control me-2" type="text" name="name" placeholder="Hae tuotetta nimellä" aria-label="Search"
                onChange={(e => {setSearch(e.target.value)})}
              />
              <Link to="/search" className="btn btn-outline-secondary">Hae</Link>
        </form>
    )
}
