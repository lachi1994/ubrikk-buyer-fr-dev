import React,{useState} from 'react'

import team1 from '../../../assets/img/profile/team-1.jpg'
import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import './profile-header.css'
import {Link} from 'react-router-dom'
function Profileheader() {
  const [ismobile,setIsmobile]=useState(false)
  return (
    <div className="navbar-div">
      <div className='profile-mobile-menu' onClick={()=>setIsmobile(!ismobile)}>{!ismobile?<GiHamburgerMenu/>:<AiOutlineClose/>}</div>
      <div className="logo"><h3>Ubrikk</h3></div>

      {/* <div className="nav">
        <a href="#">About Us</a>
        <a href="/">Services</a>
        <a href="#">Vendors</a>
      </div> */}
       <ul className={ismobile?'profile-list-mobile':'profile-list'}>
               <Link to="#" className='link-tab'>
               <li >About Us</li></Link>
              
               <Link to="#" className='link-tab'>
               <li >Service</li></Link>
               <Link to="#" className='link-tab'>
               <li >Vendors</li></Link>
            </ul>

      <div className="order-user-detail">
        <a href="/order">
          <ShoppingCartOutlined style={{ fontSize: '25px', margin: "0px 40px" }} /></a>
        <p>John Kumar</p>
        <img src={team1} alt="error" />
        <DownOutlined />
      </div>
      <div className='mobile-user'>
      <img src={team1} alt="error" className='image'/>
      </div>
    </div>
  )
}

export default Profileheader