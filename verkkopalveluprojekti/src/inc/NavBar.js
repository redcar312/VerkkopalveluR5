import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Verkkokauppa
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link className='nav-link' to='/'>
              Etusivu
            </Link>
            <div className='nav-item dropdown'>
              <Link
                className='nav-link dropdown-toggle'
                to='/'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Tuotteet
              </Link>
              <ul
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <Link className='dropdown-item' to='/'>
                    Tuoteryhmä 1
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/'>
                    Tuoteryhmä 2
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/'>
                    Tuoteryhmä 3
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Link className='nav-link' to='/aboutus'>
                Tietoa meistä
              </Link>
            </div>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Hae tuotetta nimellä" aria-label="Search" />
              <button className="btn btn-outline-secondary" type="submit">Hae</button>
            </form>
            <div>
              <Link className='nav-link' to='/'>
                Kirjaudu sisään
              </Link>
            </div>
          </div>
        </div>


      </div>
    </nav>
  );
}
