import React from 'react'
import './LogIn.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
export default function LogIn () {
  const URL = 'http://localhost/verkkopalveluprojekti_ryhma_5/login/login.php'
  const [username, setUsername] = useState('')
  const [passwd, setPasswd] = useState('')
  const [info, setInfo] = useState('')
  function checkUser (e) {
    e.preventDefault()
    axios
      .post(URL, {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          passwd: passwd
        })
      })
      .then(response => {
        setInfo(response.data.info)
      })
  }

  return (
    <div>
      <form onSubmit={checkUser}>
        <div className='row'>
          <div className='col-sm-7 offset-3 mt-5'>
            <div className='card border-dark'>
              <div className='card-header bg-dark text-warning registertitle'>
                Kirjaudu sisään
              </div>
              <div className='card-body bg-secondary'>
                <div className='input-group mb-4 mt-4'>
                  <div className='input-group-prepend'></div>

                  <input
                    type='text'
                    className='form-control'
                    placeholder='Käyttäjätunnus'
                    aria-label='username'
                    aria-describedby='basic-addon1'
                    id='fn'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>

                <div className='input-group mb-4 mt-4'>
                  <div className='input-group-prepend'></div>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Salasana'
                    aria-label='password'
                    aria-describedby='basic-addon1'
                    value={passwd}
                    onChange={e => setPasswd(e.target.value)}
                  />
                </div>
                <div className='text-dark'>
                  <Link className="productLink" to='/register'>
                    Etkö ole vielä asiakas? Rekisteröidy tästä!
                  </Link>
                </div>
                <button className='btn btn-warning btn-outline-dark btn-lg mt-1 mb-1 '>
                  Rekisteröidy
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
