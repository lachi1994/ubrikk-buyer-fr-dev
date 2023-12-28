import React from 'react'
import './Header.css'
import logo from '../../assets1/new-logo.png';
import ubrikk from '../../assets1/logo-name.png'

function Header() {
  return (
    <div className='head'>
      <div></div>
      <div className='logo'>
        <img src={logo} alt="" style={{height:"70px",width:"54px"}} />&nbsp;&nbsp;
        <img src={ubrikk}  alt="" />

      </div>
      <div className='buttons'>
        <button style={{backgroundColor:"#47a3f3"}}>LOGIN</button>
        <button style={{backgroundColor:"#0967D2"}}>SIGN UP</button>
      </div>

    </div>
  )
}

export default Header