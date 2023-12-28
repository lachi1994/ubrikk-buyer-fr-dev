import React from 'react'
import ubrikk from '../../../assets/img/ubrikk.png'
import './Payment.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Payment() {
  return (
    <>
    <div className='main-header'>
      <div className='logo'>
        <img src={ubrikk} alt="" />
      </div>
      <div className='header'>
        <div className='part-1'>
        <div className='one'>1</div>
        <div className='heading1'>Payment</div>
      </div>
      <hr style={{ width: "28%" }} />
      <div className='part-2'>
        <div className='two'>2</div>
        <div className='heading2'>Order Preview</div>
      </div>
      <hr style={{ width: "28%" }} />
      <div className='part-2'>
        <div className='two'>3</div>
        <div className='heading2'>Order Complete</div>
      </div>
        </div>
       
    </div>
    <div className='left-arrow'><AiOutlineArrowLeft/>Back</div>
    <div className='method'>
      <div className='sub-heading'> Select a payment method</div>
      
      <div className='main'>
        <div className='select'>
        <input type="checkbox"  />&nbsp;&nbsp;
      <label>Add debit/credit/ATM card</label>
        </div>
       
      <div className='sub-content'>
      <div className='details'>
<div className='card-details'> <label >Card Number</label>
 <input type="text" />
</div>

<div className='card-details'> <label >Name on card</label>
 <input type="text" />
</div>
<div className='card-details'> <label >Expiry date</label>
 <input type="number" value="01" />
 <input type="number" value="2002" />
</div>
<div><input type="checkbox" />&nbsp;&nbsp;<label > Remember the card</label></div>
</div>
<div className='line'></div>
<div className='card-row'>
  <div><span>ubrikk accepts all major debit and credit cards</span></div>
  <div className='square-row'>
    <div className='square'></div>
    <div className='square'></div>
    <div className='square'></div>
    <div className='square'></div>
    <div className='square'></div>
  </div>
</div>
      </div>
  
      </div>
      
     
      <div className='check'><input type="checkbox" /><label>UPI</label></div>
      <div className='check'><input type="checkbox" /><label>Pay on delivery</label></div>
  
<div className='continue'><Link to='/preview'><Button>Continue</Button></Link>
  
</div>
    </div>
    
    
    <div>

    </div>
    </>
  )
}

export default Payment