import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './register.css'
import { Redirect } from "react-router-dom"
export default function Register () {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [uname, setUname] = useState('')
  const [passwd, setPasswd] = useState('')
 const [done, setDone] = useState(false);
  const URL = "http://localhost/verkkopalveluprojekti_ryhma_5/register/register.php"
 
  
  function registerUser (e){
      e.preventDefault();
     fetch(URL,{
      method:'POST',
      headers: { 
        'Content-Type' : 'application/json',
        'Access-Control-Origin': '*'
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
    }). then((res) =>{
      setDone(true);
    }, (error) => alert(error))
    

   
  }

  
    
  
      
  if(done === false){
    return(

  <div className='container'>
        <form onSubmit={registerUser}>
          <div className='row'>
            <div className='col-sm-7 offset-3 mt-5'>
              <div className='card border-dark'>
                <div className='card-header bg-dark text-warning registertitle' > Rekisteröidy</div>
                <div className='card-body bg-secondary'>
                  
                  <div className='input-group mb-4 mt-4'>
                    <div className='input-group-prepend'></div>
                   
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Etunimi'
                      aria-label='Etunimi'
                      aria-describedby='basic-addon1'
                      id='fn'
                      value={fname} onChange={e => setFname(e.target.value)}
                    />
                  </div>
                  
                  <div className='input-group mb-4 mt-4'>
                    <div className='input-group-prepend'>
                      
                    </div>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Sukunimi'
                      aria-label='Sukunimi'
                      aria-describedby='basic-addon1'
                      value={lname} onChange={e => setLname(e.target.value)}
                    />
                  </div>
                  
                  <div className='input-group mb-4 mt-4'>
                    <div className='input-group-prepend'>
                    
                    </div>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Käyttäjätunnus'
                      aria-label='Username'
                      aria-describedby='basic-addon1'
                      value={uname} onChange={e => setUname(e.target.value)}
                    />
                  </div>
                  
                  <div className='input-group mb-4 mt-4'>
                    <div className='input-group-prepend'>
                      
                    </div>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='Salasana'
                      aria-label='password'
                      aria-describedby='basic-addon1'
                      value={passwd} onChange={e => setPasswd(e.target.value)}
                    
                    />
                  </div>
                <button className='btn btn-warning btn-outline-dark btn-lg '>Rekisteröidy</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )}
    else{
      return(
        <h2 className='registertittle'>Rekisteröityminen onnistui</h2>
      )
    }
}
