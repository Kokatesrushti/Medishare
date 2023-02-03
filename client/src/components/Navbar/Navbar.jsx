import React from 'react'
import { Link} from 'react-router-dom'
import './Navbar.css'



const Navbar = () => {
  const User=null;
 
  return (
    <nav className='main-nav'>
      <div className='navbar'>
        {/* <Link className='nav-item nav-logo'>
          <img src={logo} alt="logo"></img>
        </Link> */}
        <Link to='/'> 
        <h1 id="logo">Medi<span id="medicare-care">Share</span></h1></Link>
        <Link to="/uploadmed" className='nav-item nav-btn'>Upload Medicine</Link>
        <Link to="/viewmed" className='nav-item nav-btn'>Buy Medicine</Link>
        <Link to="/searchngo" className='nav-item nav-btn'>Volunteer</Link>
        
         {
           User === null ?
           <Link to='/login' ><button id="button">LOG IN</button></Link> :
           <>
             {/* <Avatar backgroundColor='#009dff' px="10px" py="8px" borderRadius="42%" color='white'><Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar> */}
             <Link to='/signup' className='nav-item nav-links'><button id="button">SIGN UP</button></Link>
             
           </>
         }
         
        
         <button id="button">JOIN US</button>
    </div>
    </nav> 
  ) 
}

export default Navbar







