import React from 'react'
import { BsFilter, BsFillGridFill } from 'react-icons/bs'
import { BiListUl, BiRupee } from 'react-icons/bi' 
import Profileheader from '../ProfileHeader/Profileheader';
import noorder from '../../../assets/img/noorders.png'
import './no-order.css'
import Sidebar from '../Sidebar/Sidebar';
function NoOrders() {
  return (
    <div>
      <Profileheader />
      <div style={{ position: "absolute", top: "60px", display: "flex",justifyContent:"center",width:"95%" }}>
        <div style={{ margin: "40px" }}>
          <Sidebar helpClass="active"/>
        </div>
   
        <div className="body-div" >

        <div className="header-drop-filter">
        <p>Your Order</p>
        <div>
          <BsFillGridFill className='menu-icon'/>&nbsp;
          <BiListUl className='bar-icon'/>&nbsp;&nbsp;&nbsp;
          <span><BsFilter />&nbsp;Filter</span>
        </div>
        </div>
  
      <div className="image-text">
        <img src={noorder} alt="" />
        <div>
          <h6>No Draft yet</h6>
          <p>Once you customize a product, you'll find you <br/>design and upload right here</p>
        </div>
      </div>



        </div>
       
    

      </div>
    </div>
  )
}

export default NoOrders