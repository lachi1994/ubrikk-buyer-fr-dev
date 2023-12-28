import React from 'react'
import ubrikk from '../../../assets/img/ubrikk.png'
import './OrderSummary.css'
import success from '../../../assets/img/success.png'
import shipping from '../../../assets/img/shipping.png'
import {BiRupee} from 'react-icons/bi'
import {MdOutlineHelp} from 'react-icons/md'
import {AiTwotoneStar,AiOutlineArrowRight} from 'react-icons/ai'
import round from '../../../assets/img/round.png'
import vendorlist from '../../../assets/icons/Vendorlist.png'
import customize from '../../../assets/icons/customize.png'
function OrderSummary() {
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
      <div className='part-2'>
        <div className='two'>2</div>
        <div className='heading2'>Order Preview</div>
      </div>
      <hr style={{ width: "38%" }} />
      <div className='part-1'>
        <div className='one'>3</div>
        <div className='heading1'>Order Complete</div>
      </div>
        </div>
       
    </div>
    <div className='whole'>
      
    <div className='complete'>
      <div></div>
      <div className='centre-col'>
<div><img src={success}   style={{width:"50px" ,height:"50px" ,marginLeft:"50%"}}/></div>
<div className='placed'><span >Order Placed</span> </div>
<div className='details'><span>Order Details</span> </div>
<div className='preview'>
   <img src={shipping}   style={{width:"30px",height:"40px",alignSelf:"center"}} />
   <div className='preview1'><span className='font1'>Order Placed </span><br/>
   12/7/2002
   </div>
   <div className='square'></div>
   <div className='square'></div>
   <img src={round} style={{width:"30px",height:"40px",alignSelf:"center"}} />
   <div className='preview1'><span className='font1'>Order Shipped </span><br/>
   <span>Not yet shipped</span>
   </div>
   <div className='square'></div>
   <div className='square'></div>
   <img src={round} style={{width:"30px",height:"40px",alignSelf:"center"}} />
   <div className='preview1'><span className='font1'>Order Shipped </span><br/>
   Not yet shipped
   </div>
</div>

      </div>
      <div className='help'><MdOutlineHelp/>Help</div>
    </div>
    <div className='vendor'>
      <div className='vendor-details'>
      <div><h5>Vendor Details</h5></div>
         <div><img src={vendorlist} alt="here"  style={{height:"18vh",width:"20vw"}} /></div>
         <div className='vendor-name'>
            <div>Preshu Plates</div>
            <div>4.0 &nbsp;<AiTwotoneStar></AiTwotoneStar></div>
         </div>
         <div className='rating'>
            <div>NamePlate Vendor</div>
            <div>250 reviews</div>
         </div>
         <div className='type' >16 completed orders</div>
         
      
      </div>
      <div className='vendor-details'>
      <div><h5>Your Customization</h5></div>
         <div><img src={customize} alt="here"  style={{height:"18vh",width:"20vw"}} /></div>
        <div ><h6>Rose Wood NumberPlates</h6></div>
        <div>A nascetur blandit netus risus ac iaculis arcu sed nisl. Venenatis augue.</div>
         <div className='qty'>
            <div><span>P.O No</span>:abc123</div>
            <div><span>Qty</span>:50</div>
         </div>
         
         
      
      </div>
      <div className='summary'>
<div><h6>Order Summary</h6></div>
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
    </div>
    <div className='shopping'><button>Continue shopping</button></div>
    </div>
   </>
  )
}

export default OrderSummary