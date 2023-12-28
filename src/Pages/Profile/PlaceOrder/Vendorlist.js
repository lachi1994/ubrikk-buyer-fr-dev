import React,{useState} from 'react'
import ProfileHeader from '../ProfileHeader/Profileheader'
import './Vendorlist.css'
import {AiOutlineArrowLeft,AiTwotoneStar,AiOutlineArrowRight} from 'react-icons/ai'
import vendorlist from '../../../assets/icons/Vendorlist.png'

import VendorListCard from './VendorListCard'
import vendors_data from './VendorsData'

function Vendorlist() {
   return (
      <>
      <ProfileHeader />
      <div className='profile'>
         <div className='profile-row1'><AiOutlineArrowLeft />&nbsp; <span>Back</span></div>
         <div className='profile-row2'>32 <span >Nameplates</span> vendors found</div>
      </div>
      <div className="d-flex justify-content-start flex-wrap gap-5">
         {vendors_data.map((item) => {
            return <VendorListCard key={item.id} {...item}/>
         })}
      </div>
      </>
   )
}

export default Vendorlist