import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './register.css'

export default function Register () {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [uname, setUname] = useState('')
  const [passwd, setPasswd] = useState('')
  const URL = "http://localhost/verkkopalveluprojekti_ryhma_5/register/register.php"
 
  
  function registerUser (e){
      e.preventDefault();
     fetch(URL,{
      method:'POST',
      headers: { 
        'Content-Type' : 'application/json',
        
      },
    body: JSON.stringify({
      fname: fname,
      lname: lname,
      uname: uname,
      passwd: passwd,
    })
     })
    .then (res=> {
      return res.json
    }). catch(error => alert(error))
  }

  return (
    <div className="container">
      <h2 className="registerTitle">Rekisteröidy</h2>
      <form onSubmit={registerUser}>
        <div>
            <h5>Etunimi</h5>
          <input id='reg' value={fname} onChange={e => setFname(e.target.value)} />
        </div>
        <div>
            <h5>Sukunimi</h5>
          <input id='reg' value={lname} onChange={e => setLname(e.target.value)} />
        </div>
        <div>
          <h5>Käyttäjänimi</h5>
          <input id="reg" value={uname} onChange={e => setUname(e.target.value)} />
        </div>
        <div>
            <h5>Salasana</h5>
          <input id="reg" value={passwd} onChange={e => setPasswd(e.target.value)} />
        </div>
       <div>
           <button type='button' className="btn btn-warning block">Rekisteröidy</button>
       </div>
      </form>
    </div>
  )
}
