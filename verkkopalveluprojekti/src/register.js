import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Register (url) {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [uname, setUname] = useState('')
  const [passwd, setPasswd] = useState('')
  
  const post = e =>{
      e.preventDefault();
      axios.post("http://localhost/verkkopalveluprojekti_ryhma_5/register/register.php",{
     
      fname: fname,
       lname: lname,
       uname: uname,
       passwd: passwd,
   
      })
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
           <button onClick={post}>Rekisteröidy</button>
       </div>
      </form>
    </div>
  )
}
