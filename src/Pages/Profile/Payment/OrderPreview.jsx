import React from 'react'
import ubrikk from '../../../assets/img/ubrikk.png'
import './OrderPreview.css'
import customize from '../../../assets/icons/customize.png'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineAudio} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'
import {MdNotes} from 'react-icons/md'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom' 

function OrderPreview() {
  return (
    <>
     <div className='main-header'>
      <div className='logo'>
        <img src={ubrikk} alt="" />
      </div>
      <div className='header'>
        <div className='part-2'>
        <div className='two'>1</div>
        <div className='heading2'>Payment</div>
      </div>
      <hr style={{ width: "38%" }} />
      <div className='part-1'>
        <div className='one'>2</div>
        <div className='heading1'>Order Preview</div>
      </div>
      <hr style={{ width: "38%" }} />
      <div className='part-2'>
        <div className='two'>3</div>
        <div className='heading2'>Order Complete</div>
      </div>
        </div>
       
    </div>
    <div className='left-arrow'><AiOutlineArrowLeft/>Back</div>
    <div className='content'>
<div className='head'>Order Preview</div>
<div className='main-content'>
<div className='sub-content1'>
  <div className='sub-head'><span>Your Customization</span></div>
  <img src={customize} />
  <div className='quantity'>
    <div><span>Quantity:</span>  50</div>
    <button>Change</button>
  </div>
  <div className='text-sidebar-btn'>
        Your Notes
      </div>
      <div className='notes'>
        <div>
          <AiOutlineAudio/><br/>
          <p>Audio Note</p>
        </div>
        <div>
          <MdNotes/><br/>
          <p>Text Note</p>
        </div>
      </div>
      <div className='Note' style={{width:"38vw"}}>
        <b>Notes:</b>&nbsp;<m>
        Placing an order with this vendor would send your customized nameplates and custom audio/video notes for reference </m>
      </div>
</div>
<div className='sub-content2'>
  <div className='box-1'>
    <div className='delivery'>
<div className='date'>Estimated Delivery Date : 12 June 2022</div>
<div className='address'>Shipping Address</div>
<div className='address-data'>Ullamcorper tristique nullam sem sed porta velit tristique integer egestas. Sed sed pellentesque odio eget vitae euismod pulvinar mauris mattis. Rhoncus consectetur vel bibendum praesent lorem pulvinar viverra vitae augue. Odio est auctor dictum praesent faucibus dolor velit sollicitudin. In augue phasellus enim maecenas ipsum egestas magna commodo id. </div>
    </div>
    <div className='payment'>
      <div className='card-box'><span>Payment method</span>
      <button>change</button></div>
      <div className='credit-card'>
        <div><span>xxxx xxxx xxxx 3456</span></div>
        <div><span>johnny</span></div>
        <div><span>Expiry Date : xx/2025</span></div>
      </div>

    </div>
    
  </div>
  <div className='box-2'>
    <div className='price'>
    <div className='summary'>Order Summary</div>
    <div className='price-row'>
      <div>Items</div>
      <div><BiRupee/>4800</div>
    </div>
    <div className='price-row'>
      <div>Packing Charges</div>
      <div><BiRupee/>0</div>
    </div>
    <div className='price-row'>
      <div>Total Before Tax</div>
      <div><BiRupee/>4800</div>
    </div>
    <div className='price-row'>
      <div>Tax</div>
      <div><BiRupee/>200</div>
    </div>
    </div>
    <div className='total'><span>Order Total</span> &nbsp;<BiRupee/> 5000</div>
    
  </div>
</div>
</div>
<div className='place'><Link to='/summary'><Button>Place Order</Button></Link> </div>
    </div>
    </>
  )
}

export default OrderPreview