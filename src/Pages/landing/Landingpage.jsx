import React from 'react'
import "./Landing.css";
import { useNavigate } from 'react-router-dom';

import { AiFillAudio, AiFillVideoCamera, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from 'react-icons/bs'

import bgimage from '../../assets/img/bg.jpg'; 
import Header from './Header';
import Navbar from './Navbar';

function LandingPage() {
  const navigate=useNavigate();
  
  const handleClick=()=>{
navigate('/customize')
  }
  return ( 
    <div className='landing-body'>
        <Navbar />
        <div className='landing-content'>
          <p className='custom '>CUSTOMIZING A <strong>NAMEPLATE</strong></p>
          <div className='need'>What do you need this product for?</div>
          <input placeholder='For my house, school...' type="text" className='landing-input' />
          <b>OR</b>
        </div>

        <div className='ado-vdo-lables'>
          <div>
            <AiFillVideoCamera className='icon' />
            <p>Upload Video</p>
          </div>
          <div>
            <AiFillAudio className='icon' />
            <p>Upload Audio</p>
          </div> 
        </div>

        <div className="btn-groups">
          <button  onClick={()=>navigate(-1)} className='btn-transparent'>Back</button>
          <button onClick={handleClick}>Next</button>
        </div>

        <div className='social-icons'>
          <BsFacebook className='icon' />
          <AiFillTwitterCircle className='icon' />
          <AiFillInstagram className='icon' />
        </div>
      </div> 
  )
}

export default LandingPage