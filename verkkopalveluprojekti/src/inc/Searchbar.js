import React from 'react'
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Searchbar() {
    const[search, setSearch] = useState('');

    useEffect(() => {
      console.log(search)
    })

    return (
        <form className="d-flex">
              <input className="form-control me-2" type="text" name="name" placeholder="Hae tuotetta nimellä" aria-label="Search"
                onChange={(e => {setSearch(e.target.value)})}
              />
              <Link to={{
                pathname: "/search",
                state: {
                  name: search
                }
              }} className="btn btn-outline-secondary">Hae</Link>
        </form>
    )
}
