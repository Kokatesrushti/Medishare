import React from 'react'
import './Login.css'
import medical from '../components/images/medical.png'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'


const Login = () => {

  const navigate=useNavigate()

  const [email,setemail]=useState('')
  const [password,setpass]=useState('')

  async function login(e){
    e.preventDefault();
    try {
      const result = await fetch('http://localhost:2000/api/login', {
          method: 'POST',
          headers: {
              'Content-Type': "application/json",
          },
          body: JSON.stringify({
              email, password
          })

      }).then((res) => res.json())
      // console.log(result.token)
      // localStorage.setItem('token', result.token)
      
      // console.log(result.user)
      if(result.status === 200) { 
          alert("Login Successfully 💫")
          navigate('/')}
      else if(password.length<6){
          alert("Password must be minimum six characters 💀")
      }
      else if(result.status === 400){
          alert("Invalid Email or Password 🥺")
      }
      else {
          alert("Invalid Email or Password 🥺")
      }

  }
  catch (err) {
      console.log(err)
  }
  window.location.reload();
}

    
    return(
        <body className="flex center login-body" >
  <div class="page-grid grid">
    <section className="banner grid center">
      <img src={medical} alt="" width="22"/>
    </section>
    <section className="form-wrapper grid center">
      <form action="" className="form-section">
        <div className="header">
          <h1>Welcome Back</h1>
        </div>
        <div className="field">
          <label for="">Email</label>
          <input type="text" placeholder="Enter Your name" value={email} onChange={(e)=>setemail(e.target.value)}/>
        </div>

        <div className="field">
          <label for="">Password</label>
          <input type="password" placeholder="Enter Your password" value={password} onChange={(e)=>setpass(e.target.value)} />
        </div>
        <div className="pass-section flex">
          <div className="input-item">
           
           
          </div>
          
        </div>
        <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
        
        <div className="footer">
          <p>Dont have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </form>
    </section>
  </div>
  </body>
    )
}

export default Login