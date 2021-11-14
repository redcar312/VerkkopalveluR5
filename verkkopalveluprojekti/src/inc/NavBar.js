import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function NavBar({url,cart,setCategory}) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get(url + 'products/categories.php')
      .then((response)=> {
        const json = response.data;
        setCategories(json);
      }).catch(error => {
        if (error.response === undefined) {
          alert(error);
            } else {
              alert(error.response.data.error);
            }
      })
  }, [])


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
              {categories.map(category => (
                <li key={category.id}>
                  <Link
                  className="dropdown-item"
                  to={{
                    pathname: '/',
                    state: {
                      ida: category.id,
                      name: category.name
                    }
                  }}
                  >{category.name}
                  </Link>
                  </li>
              ))}
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
