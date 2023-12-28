 import React from 'react'
 import './Payment.css'
 function CardDetails() {
   return (
     <>
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
<div><input type="checkbox" /><label > Remember the card</label></div>
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
     </>
   )
 }
 
 export default CardDetails