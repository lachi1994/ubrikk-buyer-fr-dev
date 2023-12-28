import React, { useState } from 'react'


import './order-layout.css'
import { BsFilter, BsFillGridFill } from 'react-icons/bs'
import { BiListUl, BiRupee } from 'react-icons/bi'
import order1 from '../../../assets/icons/order1.png'
import order2 from '../../../assets/icons/order2.png'
import order3 from '../../../assets/icons/order3.png'
import order4 from '../../../assets/icons/order4.png'



function OrderLayout() {

  const [filterDesign, setFilterDesign] = useState("All")
  const switchItems = e => {
    setFilterDesign(e.target.value);
  }

  return (
    <div className="mainDiv">

      <div className="header-drop-filter">
        <p className='your-order'>Your Order</p>
        <div className='icons'>
          <BsFillGridFill className='menu-icon' />&nbsp;
          <BiListUl className='bar-icon' />&nbsp;&nbsp;&nbsp;
          <span className='filter-icon'><BsFilter />&nbsp;<span className='filter'>Filter</span></span>
        </div>
      </div>

      <div className='months' style={{ fontSize: "25px", fontWeight: "800" }}>This Month</div>
      <div className="items-div">

        <div className="item">
          <img src={order1} alt="dsfdsfds" />
          <div className="item-title">
            <div>
              <span className='span-title'>Nameplates</span>
              <p className='date'>2 days ago</p>
            </div>
            <b>$ 35.60</b>
          </div>
        </div>

        <div className="item">
          <img src={order2} alt="dsfdsfds" />
          <div className="item-title">
            <div>
            <span className='span-title'>Nameplates</span>
            <p className='date'>2 days ago</p>
            </div>
            <b>$ 35.60</b>
          </div>
        </div>

        <div className="item">
          <img src={order3} alt="dsfdsfds" />
          <div className="item-title">
            <div>
            <span className='span-title'>Nameplates</span>
            <p className='date'>2 days ago</p>
            </div>
            <b>$ 35.60</b>
          </div>
        </div>

        <div className="item">
          <img src={order4} alt="dsfdsfds" />
          <div className="item-title">
            <div>
            <span className='span-title'>Nameplates</span>
            <p className='date'>2 days ago</p>
            </div>
            <b>$ 35.60</b>
          </div>
        </div>


      </div>

      <br />
      <div className='months' >Last Month</div>
      <div className="items-div">

        <div className="item">
          <img src={order1} alt="dsfdsfds" />
          <div className="item-title">
            <div>
            <span className='span-title'>Nameplates</span>
            <p className='date'>2 days ago</p>
            </div>
            <b>$ 35.60</b>
          </div>
        </div>

        <div className="item">
          <img src={order2} alt="dsfdsfds" />
          <div className="item-title">
            <div>
            <span className='span-title'>Nameplates</span>
            <p className='date'>2 days ago</p>
            </div>
            <b>$ 35.60</b>
          </div>
        </div>

        <div className="item">
          <img src={order3} alt="dsfdsfds" />
          <div className="item-title">
            <div>
            <span className='span-title'>Nameplates</span>
            <p className='date'>2 days ago</p>
            </div>
            <b>$ 35.60</b>
          </div>
        </div>

        <div className="item">
          <img src={order4} alt="dsfdsfds" />
          <div className="item-title">
            <div>
            <span className='span-title'>Nameplates</span>
            <p className='date'>2 days ago</p>
            </div>
            <b>$ 35.60</b>
          </div>
        </div>


      </div>
    </div>
  )
}

export default OrderLayout;