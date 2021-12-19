import React from 'react'
import './LogIn.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function LogIn () {
  const URL = 'http://localhost/verkkopalveluprojekti_ryhma_5/login/login.php'
  const [username, setUsername] = useState('')
  const [passwd, setPasswd] = useState('')

  function checkUser (e) {
    e.preventDefault()
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        passwd: passwd
      })
    })
      .then(res => {
        return res.json
      })
      .catch(error => alert(error))
  }

  return (
    <div className='container'>
      <div className='form-group'>
        <form onSubmit={checkUser}>
          <div>
            <label>Käyttäjätunnus</label>
            <input
              className='form-control'
              value={username}
              onChange={e => setUsername(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Salasana</label>
            <input
              className='form-control'
              value={passwd}
              onChange={e => setPasswd(e.target.value)}
            ></input>
          </div>
          <div>
            <button className='btn btn-warning logInButton'>Kirjaudu</button>
          </div>
        </form>
        <div>
          <Link className="productLink" to='/register'>
            Etkö ole vielä asiakas? Rekisteröidy tästä!
          </Link>
        </div>
      </div>
    </div>
  )
}
