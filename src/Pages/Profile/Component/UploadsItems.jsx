import React from 'react'   
import home1 from '../../../assets/icons/home1.png'
import home3 from '../../../assets/icons/home3.png'
import home2 from '../../../assets/icons/home2.png'
import home4 from '../../../assets/icons/home4.png'
import vendor from '../../../assets/icons/vevdor.png' 


function DesignsItems() {
  return ( 
      <div className="items-div">
       
       <div className="item">
          <img src={vendor} alt="dsfdsfds" />
          <div className="item-title">
            <div>
            <div className='nameplate-span'>Nameplates</div>
              <p>2 days ago</p>
            </div>
          </div>
        </div>
        
        <div className="item">
          <img src={home1} alt="dsfdsfds" />
          <div className="item-title">
            <div>
            <div className='nameplate-span'>Nameplates</div>
              <p>2 days ago</p>
            </div>
          </div>
        </div>
        
        <div className="item">
          <img src={home4} alt="dsfdsfds" />
          <div className="item-title">
            <div>
            <div className='nameplate-span'>Nameplates</div>
              <p>2 days ago</p>
            </div>
          </div>
        </div>
        
        <div className="item">
          <img src={home2} alt="dsfdsfds" />
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