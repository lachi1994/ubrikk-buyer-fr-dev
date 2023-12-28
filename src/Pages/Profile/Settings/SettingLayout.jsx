import React from 'react'
import './setting-layout.css'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import team1 from '../../../assets/img/profile/team-1.jpg'
import Switch from '@material-ui/core/Switch'; 


function AccountSetting() {
  return (
    <>
      <h4>Your Account</h4>
      <h6>Profile photo</h6>

      <div className="user-switch-details">
        <img src={team1} alt="" />
        <button className='transparent-btn'>Remove Photo</button>
        <button >Change Photo</button>
      </div>

      <hr />

      <div className="user-switch-details">
        <div>
          <h6>Name</h6>
          <p>John Kumar</p>
          {/* <input type="text" className='update-inputs-feilds'/> */}
        </div>  
        <button >Edit</button>
      </div>

      <div className="user-switch-details">
        <div>
          <h6>Email Address</h6>
          <p>Johnkumar@me.com</p>
        </div>
        <button >Edit</button>
      </div>

      <hr />

      <br /><h6>Social Accounts</h6>
      <p>Services you can use to log in</p> <br />

      <div className="social-div">
        <div>
          <BsFacebook style={{ fontSize: "25px", color: "blue" }} />
          <div>
            <h6>Facebook</h6>
            <p>John Kumar</p>
          </div>
        </div>
        <button className='setting-btn'>Disconnect</button>
      </div>

      <div className="social-div">
        <div>
          <AiFillTwitterCircle style={{ fontSize: "28px", color: "blue" }} />
          <div>
            <h6>Facebook</h6>
            <p>John Kumar</p>
          </div>
        </div>
        <button className='setting-btn'>Disconnect</button>
      </div>
    </>
  )
}

function LoginSecurity() {
  return (
    <>
      <h4>Login and Security</h4>
      <h6>Change password</h6> 
      <p className='setting-p'>Change your password if you feel someone has access to your account</p>

      <button className='setting-btn'>Change Password</button>

      <br /><br /><hr /><br />

      <h6>Delete your account</h6>
      <p  className='setting-p'>By deleting your account, you’ll no longer be able to access any of Ubrikk’s unique features.</p>

      <button className='setting-btn'>Delete Account</button>


    </>
  )
} 

function Notification() {
  return (
    <>
      <h4>Notification</h4>
      <h6>Account notification</h6>
      <p className='setting-p'>Choose the type of notifications you would like to receive</p>


      <div className="user-notification">
        <div>
          <input type="checkbox" />
          <p className="setting-p">Password change</p>
          <input type="checkbox" />
          <p className="setting-p">Successful payment</p>
        </div>
        <div>
          <input type="checkbox" />
          <p className="setting-p">Order delivered</p>
          <input type="checkbox" />
          <p className="setting-p">Order cancelled</p>
        </div>
      </div>

      <hr />


      <h6>Email notification</h6>
      <p className='setting-p'>Decide which email you would like to receive from us</p>

      <div className="user-switch-details">
        <div>
          <h6>Weekly Update</h6>
          <p>Get weekly update of what’s happening on Ubrikk</p>
        </div>
        <Switch color="primary"  />
      </div>

      <div className="user-switch-details">
        <div>
          <h6>Monthly Update</h6>
          <p>Get monthly update of what’s happening on Ubrikk</p>
        </div>
        <Switch color="primary" />
      </div>

      <div className="user-switch-details">
        <div>
          <h6>Recommendations</h6>
          <p>Discover recommended templates</p>
        </div>
        <Switch color="primary"  />
      </div>

      <div className="user-switch-details">
        <div>
          <h6>Holiday Greetings</h6>
          <p>Opt in to receive holiday greetings from us</p>
        </div> 
        <Switch color="primary" />
      </div>


    </>
  )
}

function BillingPayment() {
  return (
    <>
      <h4>Billing and Payment info</h4>
      <h6>Billing Address</h6>

      <div className="user-switch-details">
        <div>
          <h6>Name</h6>
          <p>John Kumar</p>
        </div>
        <button >Edit</button>
      </div>

      <div className="user-switch-details">
        <div>
          <h6>Billing Address</h6>
          <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
        </div>
        <button >Edit</button>
      </div>

      <hr />

      <h6>Payment method</h6>

      <select className='payment-type' >
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
      </select>

      <div className="user-switch-details">
        <div>
          <h6>Card Holder’s Name</h6>
          <p>John Kumar</p>
        </div>
        <div>
          <h6>Card Number</h6>
          <p>8934 9324 2343 3244</p>
        </div>
        <div></div>
      </div>

      <div className="user-switch-details">
        <div>
          <h6>Expiration Date</h6>
          <p>04/25</p>
        </div>
        <div>
          <h6> Cvv &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
          <p> *** </p>  
        </div> 
        <div></div>
      </div>

      <div className="user-switch-details">
        <div></div>
        <button >Edit</button>
      </div>


    </>
  )
}

export default AccountSetting
export { LoginSecurity, Notification, BillingPayment }