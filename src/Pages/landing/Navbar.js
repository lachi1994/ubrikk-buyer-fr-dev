import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import {FiLogIn} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux';

import { getUser, LogoutUser } from 'redux/features/auth';
function Navbar() {
   const user = useSelector(getUser);
	const dispatch = useDispatch();
   const [istablet,setIstablet]=useState(false)
   const [ismobile,setIsmobile]=useState(false)
   
	const logout = () => dispatch(LogoutUser());
  return (
<div className='navbar'>
<div className='mobile-menu' onClick={()=>setIsmobile(!ismobile)}>{!ismobile?<GiHamburgerMenu/>:<AiOutlineClose/>}</div>
<div className='logo'>
				<h4>Ubrikk</h4>
			</div>
         {/* <div className='nav' style={{ justifyContent: 'center' }}>
				<a href='#'>About Us</a>
				<a href='/profile'>Products</a>
				<a href='#'>Services</a>
				<a href='#'>Vendors</a>
			</div> */}
         <ul className={ismobile?'nav-list-mobile':'nav-list'}>
            <Link to="#" className='link-tab'>
            <li >About Us</li></Link>
            <Link to="#" className='link-tab'>
            <li  >Products</li></Link>
            <Link to="#" className='link-tab'>
            <li >Service</li></Link>
            <Link to="#" className='link-tab'>
            <li >Vendors</li></Link>
         </ul>
         <div>
            {
               user?(
                  <ul className={istablet?'nav-links-tablet':'nav-links'}>
               <li className='login'>{user.profile.full_name}</li>
                <li onClick={logout} className="signup">Logout</li>
            
            
            
                </ul>
               ):(
                  <ul className={istablet?'nav-links-tablet':'nav-links'}>
                  <Link to="/signin" className='login'>
               <li>Login</li>
            </Link>
                  <Link to="/signup" className='signup'>
               <li>Signup</li>
            </Link>
            
            
                  </ul>
               )

            }
    
      </div>
      <div className='tablet-menu' onClick={()=>setIstablet(!istablet)}>{!istablet?<FiLogIn/>:<AiOutlineClose/>}</div>
</div>
  )
}

export default Navbar