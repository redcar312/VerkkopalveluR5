import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Searchbar() {
    const[search, setSearch] = useState('');

    return (
        <form className="d-flex">
              <input className="form-control me-2" type="text" value="" name="name" placeholder="Hae tuotetta nimellä" aria-label="Search" />
              <Link to="/search" className="btn btn-outline-secondary">Hae</Link>
        </form>
    )
}
