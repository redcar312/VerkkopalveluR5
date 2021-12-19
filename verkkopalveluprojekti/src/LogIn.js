import React from 'react'
import './LogIn.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
export default function LogIn () {
  const URL = 'http://localhost/verkkopalveluprojekti_ryhma_5/login/login.php'
  const [username, setUsername] = useState('')
  const [passwd, setPasswd] = useState('')

  const base64cred = btoa(username+':'+passwd)

  let params = {
    method: 'POST',
    headers: {
      Authorization: 'Basic' + base64cred
    },
    withCredentials:true
  }
  
  function checkUser(e) {
    e.preventDefault();
    axios.post(URL, params
      ).then(res => res.text)
      .then(t => console.log(t))
      .catch(error => console.log(error));
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
