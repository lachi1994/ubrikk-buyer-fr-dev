import React from 'react'  
import order1 from '../../../assets/icons/order1.png'
import order2 from '../../../assets/icons/order2.png'
import order3 from '../../../assets/icons/order3.png'
import order4 from '../../../assets/icons/order4.png'


function DesignsItems() {
  return ( 
      <div className="items-div">
        
        <div className="item">
          <img src={order1} alt="dsfdsfds" />
          <div className="item-title">
            <div>
            <div className='nameplate-span'>Nameplates</div>
              <p>2 days ago</p>
            </div>
          </div>
        </div>
 
        <div className="item">
          <img src={order2} alt="dsfdsfds" />
          <div className="item-title">
            <div>
            <div className='nameplate-span'>Nameplates</div>
              <p>2 days ago</p>
            </div>
          </div>
        </div>
        
        <div className="item">
          <img src={order4} alt="dsfdsfds" />
          <div className="item-title">
            <div>
            <div className='nameplate-span'>Nameplates</div>
              <p>2 days ago</p>
            </div>
          </div>
        </div>
        
        <div className="item">
          <img src={order3} alt="dsfdsfds" />
          <div className="item-title">
            <div>
            <div className='nameplate-span'>Nameplates</div>
              <p>2 days ago</p>
            </div>
          </div>
        </div> 

        </div>
        
        ) 
}

export default DesignsItems