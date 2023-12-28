import React from 'react'
import './Landing.css';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import bgimage from '../../assets/img/bg.jpg';
import cake from '../../assets/img/cake.png'
import nameplate from '../../nameplate.svg';
import label from '../../label.svg';
import car from '../../assets/img/car.png';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate()
  return (
    <div className='landing-body'>
      <Navbar />
      <div className='landing-content'>
        <h2>Pick a product and have it delivered according to your <span> specifications</span> </h2>
      </div>
      <div className='three-lables'>
        <a className='links'>
          <div onClick={() => { window.location.href = 'https://ubrikk-cake-buyer.netlify.app' }}>
            <img src={cake} alt="error" />
            <p>Cake</p>
          </div>
        </a>
        <a href='/landingpage' className='links'>
          <div>
            <img src={nameplate} alt="error" />
            <p>Nameplates</p>
          </div>
        </a>
        <a className='links'>
          <div>
            <img src={label} alt="error" />
            <p>Labels</p>
          </div>
        </a>
        <a href='/customizecar' className='links'>
          <div>
            <img src={car} alt="error" />
            <p>Cars</p>
          </div>
        </a>
      </div>
      <div className='social-icons'>
        <BsFacebook className='icon' />
        <AiFillTwitterCircle className='icon' />
        <AiFillInstagram className='icon' />
      </div>
    </div>
  )
}

export default Landing