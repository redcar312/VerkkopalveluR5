import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cart from '../Cart'
import Searchbar from './Searchbar'
const URL = "http://localhost/verkkopalveluprojekti_ryhma_5/";


export default function NavBar({url,cart,setCategory}) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get(url + 'products/categories.php')
      .then((response)=> {
        const json = response.data;
        setCategories(json);
        setCategory(json[0]);
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
        <Link className='logo' to='/'>
        <img src={url + 'img/' + 'voima-logo.png'} alt="logo" />
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
              <a
                className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
              >
                Tuotteet
              </a>
              <ul
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
              {categories.map(category => (
                <li className="categoryDropDown" key={category.id}>
                  <Link
                  className="dropdown-item"
                  to={{
                    pathname: '/',
                    state: {
                      id: category.id,
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
            <div className="nav-item">
              <Searchbar />
            </div>
            <Link className='nav-link' to='/login'>
                Kirjaudu sisään
             
             </Link>
             <Link className='nav-link' to='/register'>
               Rekisteröidy </Link>
            <ul className="navbar-nav">
              <li className="nav-item ms-auto">
                <Cart cart={cart} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
