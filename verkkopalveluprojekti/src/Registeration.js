import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from './inc/NavBar'
import Footer from './inc/Footer'
import axios from 'axios'

export default function registerUser () {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [uname, setUname] = useState('')
  const [passwd, setPasswd] = useState('')
  
  const send = e =>{
      e.preventDefault();
      axios.post("http://localhost/verkkopalveluprojekti_ryhma_5/functions.php"),{
       fname: fname,
       lname: lname,
       uname: uname,
       passwd: passwd,
      }
  }

  return (
    <div>
      <form>
        <div>
            <label>Etunimi</label>
          <input value={fname} onChange={e => setFname(e.target.value)} />
        </div>
        <div>
            <label>Sukunimi</label>
          <input value={lname} onChange={e => setLname(e.target.value)} />
        </div>
        <div>
          <label>Käyttäjänimi</label>
          <input value={uname} onChange={e => setUname(e.target.value)} />
        </div>
        <div>
            <label>Salasana</label>
          <input value={passwd} onChange={e => setPasswd(e.target.value)} />
        </div>
       <div>
           <button onClick={send}>Rekisteröidy</button>
       </div>
      </form>
    </div>
  )
}
