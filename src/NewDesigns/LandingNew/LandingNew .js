import Header from '../Header/Header'
import React from 'react'
import { NavLink } from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
import laser from '../../assets1/laser.png'
import woodwork from '../../assets1/woodwork.png'
import food from '../../assets1/food.png'
import clothing from '../../assets1/laser.png'
import apparel from '../../assets1/apparel.png'
import fabrication from '../../assets1/fabrication.png'
import jewellery from '../../assets1/jewellery.png'

import './LandingNew.css'

function LandingNew () {
  return (
    <div>
      <Header></Header>
      <div className='card-div1
      '>
        
        <NavLink to="#" className="nav-link" >
 <Card style={{ width: '15rem',backgroundColor:"#cbd2d9",padding:"10px",border:"none",boxShadow: '1px 2px 9px gray' }}>
     <img src={laser}/>
     <div className='text-link'>LASERSHOP</div>
    </Card>
    </NavLink>
    <NavLink to="#" className="nav-link" >
 <Card style={{ width: '15rem',backgroundColor:"#cbd2d9",padding:"10px",border:"none",boxShadow: '1px 2px 9px gray' }}>
     <img src={woodwork}/>
     <div className='text-link'>LASERSHOP</div>
    </Card>
    </NavLink>
    <NavLink to="#" className="nav-link" >
 <Card style={{ width: '15rem',backgroundColor:"#cbd2d9",padding:"10px",border:"none",boxShadow: '1px 2px 9px gray' }}>
     <img src={food}/>
     <div className='text-link'>LASERSHOP</div>
    </Card>
    </NavLink>
    <NavLink to="#" className="nav-link" >
 <Card style={{ width: '15rem',backgroundColor:"#cbd2d9",padding:"10px",border:"none",boxShadow: '1px 2px 9px gray' }}>
     <img src={clothing}/>
     <div className='text-link'>LASERSHOP</div>
    </Card>
    </NavLink>
    </div>
    <div className='card-div2'>
    <NavLink to="#" className="nav-link" >
 <Card style={{ width: '15rem',backgroundColor:"#cbd2d9",padding:"10px",border:"none",boxShadow: '1px 2px 9px gray' }}>
     <img src={apparel}/>
     <div className='text-link'>LASERSHOP</div>
    </Card>
    </NavLink>
    <NavLink to="#" className="nav-link" >
 <Card style={{ width: '15rem',backgroundColor:"#cbd2d9",padding:"10px",border:"none",boxShadow: '1px 2px 9px gray' }}>
     <img src={fabrication}/>
     <div className='text-link'>LASERSHOP</div>
    </Card>
    </NavLink>
    <NavLink to="#" className="nav-link" >
 <Card style={{ width: '15rem',backgroundColor:"#cbd2d9",padding:"10px",border:"none",boxShadow: '1px 2px 9px gray' }}>
     <img src={jewellery}/>
     <div className='text-link'>LASERSHOP</div>
    </Card>
    </NavLink>
      </div>
    </div>
  )
}

export default LandingNew 