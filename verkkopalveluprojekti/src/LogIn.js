import React from 'react'
import './LogIn.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';
export default function LogIn() {
 const URL = "http://localhost/verkkopalveluprojekti_ryhma_5/login/login.php"   
 const [username, setUsername] = useState('')
 const [passwd, setPasswd] = useState ('')  
    function checkUser(e){
    e.preventDefault();
    fetch(URL,{
        method:'POST',
        headers: { 
          'Content-Type' : 'application/json',
          
        },
        body: JSON.stringify({
            username: username,
            passwd: passwd
          })
           })
          .then (res=> {
            return res.json
          }). catch(error => alert(error))
      
    }
    
    return (
<<<<<<< HEAD
        <div>
          <form onSubmit={checkUser}>
           <div>
            <label>Käyttäjätunnus</label>
            <input value={username} onChange={e => setUsername(e.target.value)}></input>
            </div>   
            <div>
                <label>Salasana</label>
                <input value={passwd} onChange={e => setPasswd(e.target.value)}></input>
            </div>
             <div>
             <Link to="/register">Etkö ole vielä asiakas? Rekisteröidy tästä!</Link>
            </div> 
              
              </form>  
          
=======
        <div className='container'>
            <h1>Kirjaudu sisään</h1>
            <h4>Käyttäjänimi</h4>
                <input id="dd" type="text" />
            <h4>Salasana</h4>
                <input id="dd" type="text" />
            <div className="row">
                <button className="btn btn-warning">Kirjaudu</button>
            </div>
            <div className="row">
                <Link to="/register">Etkö ole vielä asiakas? Rekisteröidy tästä!</Link>
            </div>
>>>>>>> refs/remotes/origin/master
        </div>
    )
}
