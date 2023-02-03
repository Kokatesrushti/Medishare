import React from 'react'
import './Login.css'
import medical from '../components/images/medical.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  
  const navigate=useNavigate();

  const [firstName,setfname]=useState('')
  const [lastName,setlname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpass]=useState('')
  const [location,setlocation]=useState('')
  const [profession,setprofession]=useState('other')

  async function register(e){
    e.preventDefault();
    // console.log(firstName,lastName,email,password,location);
    const res=await fetch("http://localhost:2000/api/signup",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        firstName,lastName,email,password,location,profession
      })
    })

    const data = await res.json()
        if(res.status === 200) { 
            alert("Registered Successfully 💫")
        }
        if(password.length<6){
            alert("Password must be minimum six characters 💀")
            navigate('/sign')
        }
        else{
            navigate("/login",{replace:true});
        }
        console.log(data);

  }


    return(
        <body className="flex center">
  <div className="page-grid grid">
    <section className="banner grid center">
      <img src={medical} alt="" />
    </section>
    <section className="form-wrapper grid center">
      <form action="" className="form-section">
        <div className="header">
          <h1>Welcome Back</h1>
          <p>Welcome back, Please enter your details</p>
        </div>
        <div className="field">
          <label for="">First Name</label>
          <input type="text" placeholder="Enter Your First name" value={firstName} onChange={(e)=>setfname(e.target.value)}/>
        </div>
        <div className="field">
          <label for="">Last Name</label>
          <input type="text" placeholder="Enter Your Last name" value={lastName} onChange={(e)=>setlname(e.target.value)}/>
        </div>
        <div className="field">
          <label for="">Email</label>
          <input type="text" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
        </div>
        <div className="field">
          <label for="">Location</label>
          <input type="text" placeholder="Enter Your location" value={location} onChange={(e)=>setlocation(e.target.value)}/>
        </div>
        <div className="field">
          <label for="">Password</label>
          <input type="password" placeholder="Enter Your password" value={password} onChange={(e)=>setpass(e.target.value)}/>
        </div>
        <div className="container-down">
        <div className="select-dropdown">
            <p>Profession</p>
	<select>
		<option value="other" onChange={(e)=>setprofession(e.target.value)}>Other</option>
		<option value="doctor" onChange={(e)=>setprofession(e.target.value)}>Doctor</option>
	</select>
</div>
</div>
        <div className="pass-section flex">
          <div className="input-item">
          </div>
          
        </div>
        <button type="submit" className="btn btn-primary" onClick={register}>Sign Up</button>
        
        <div className="footer">
          <p>Already have an account <Link to='/login'>Login</Link></p>
        </div>
      </form>
    </section>
  </div>
  </body>
    )
}

export default Signup