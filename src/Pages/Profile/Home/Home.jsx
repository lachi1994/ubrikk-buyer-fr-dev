import React from 'react'
import Profileheader from '../ProfileHeader/Profileheader'
import Sidebar from '../Sidebar/Sidebar'
import './home.css'
import bag from '../../../assets/icons/bagw.svg'
import star from '../../../assets/icons/star.png'
import nameplate from '../../../assets/icons/namew.svg'
import label from '../../../assets/icons/labelw.svg'
import home1 from '../../../assets/icons/home1.png'
import home3 from '../../../assets/icons/home3.png'
import home2 from '../../../assets/icons/home2.png'
import home4 from '../../../assets/icons/home4.png'
import vendor from '../../../assets/icons/vevdor.png'
import order1 from '../../../assets/icons/order1.png'
import order2 from '../../../assets/icons/order2.png'
import order3 from '../../../assets/icons/order3.png'
import order4 from '../../../assets/icons/order4.png'

function Home() {
  return (
    <>

      <div className="profile-container">
        <Profileheader />

        <div className="profile-body">
          <div className="sidebar">
            <Sidebar  />
          </div>
          <div className="outlet">
            
      <div className="header-div" >
        <h2>What will you order?</h2>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

          <div>
            <img src={star} alt="error" />
            <p className='active'>For you</p>
          </div>

          <div>
            <img src={bag} alt="error" />
            <p>Kid's bags</p>
          </div>

          <div>
            <img src={nameplate} alt="error" />
            <p>Nameplates</p>
          </div>

          <div>
            <img src={label} alt="error" />
            <p>Labels</p>
          </div>


        </div>
      </div>

      <div className="items-div">

        <div className="item">
          <img src={home1} alt="error" style={{ height: "140px" }} />
          <h5 style={{ fontWeight: "600", marginTop: "-40px" }}>Kid's bags</h5>
        </div>

        <div className="item" >
          <img src={home2} alt="error" style={{ height: "140px" }} />
          <h5 style={{ fontWeight: "600", marginTop: "-40px" }}>Nameplates</h5>
        </div>

        <div className="item">
          <img src={home3} alt="error" style={{ height: "140px" }} />
          <h5 style={{ fontWeight: "600", marginTop: "-40px" }}>Labels</h5>
        </div>

        <div className="item">
          <img src={home4} alt="error" style={{ height: "140px" }} />
          <h5 style={{ fontWeight: "600", marginTop: "-40px" }}>Nameplates</h5>
        </div>

        <div className="item">
          <img src={vendor} alt="error" style={{ height: "140px" }} />
          <h5 style={{ fontWeight: "600", marginTop: "-40px" }}>Vendor</h5>
        </div>

      </div>


      <br /> <h6 style={{ fontSize: "25px", fontWeight: "800" }}>Recent Customizations</h6>
      <div className="items-div">

        <div className="item">
          <img src={order1} alt="error" />
          <div className="item-title">
            <div>
              <h6>Nameplates</h6>
              <p>2 days ago</p>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={order2} alt="error" />
          <div className="item-title">
            <div>
              <h6>Nameplates</h6>
              <p>2 days ago</p>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={order3} alt="error" />
          <div className="item-title">
            <div>
              <h6>Kid's bags</h6>
              <p>2 days ago</p>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={order4} alt="error" />
          <div className="item-title">
            <div>
              <h6>Nameplates</h6>
              <p>2 days ago</p>
            </div>
          </div>
        </div>


      </div>

          </div>
        </div>
      </div> 
    </>

  )
}

export default Home