import React, { useState } from 'react'
import Profileheader from '../ProfileHeader/Profileheader';
import Sidebar from '../Sidebar/Sidebar';
import './setting.css' 
import { BsFillShieldLockFill } from 'react-icons/bs' 
import { FaUserAlt, FaBell } from 'react-icons/fa'
import { MdPayment } from 'react-icons/md' 
import AccountSetting, { LoginSecurity, Notification, BillingPayment } from './SettingLayout';
function Settings() {


  const [settingMenu, setSettingMenu] = useState("Your account");

  const switchSettingMenu = e => {
    setSettingMenu(e.target.innerText);
  } 


  return (
    <div>
      <Profileheader />
      <div style={{ position: "absolute", top: "60px", display: "flex", left: "0", justifyContent: "flex-start", alignItems: "start", width: "100%" }}>
        <div style={{ margin: "40px" }}>
          <Sidebar />
        </div>

        <div className="setting-body-div">

          <div className="header-drop-filter">
            <p>Setting</p>
          </div>

          <div className="setting-items active">
 
            <div onClick={switchSettingMenu} >
              <FaUserAlt style={{ fontSize: "20px", marginTop: "5px" }} /> &nbsp;&nbsp;<p>Your account</p>
            </div>
            <div onClick={switchSettingMenu} >
              <BsFillShieldLockFill style={{ fontSize: "20px", marginTop: "5px" }} /> &nbsp;&nbsp;<p>Login and Security</p>
            </div>
            <div onClick={switchSettingMenu} >
              <FaBell style={{ fontSize: "20px", marginTop: "5px" }} /> &nbsp;&nbsp;<p>Notification</p>
            </div>
            <div onClick={switchSettingMenu} >
              <MdPayment style={{ fontSize: "20px", marginTop: "5px" }} />&nbsp;&nbsp; <p>Billing &amp; payment Info</p>
            </div>
          </div>


        </div>

        <div className='setting-section'>
          
          { settingMenu === "Your account" && <AccountSetting /> }
          { settingMenu === "Login and Security" && <LoginSecurity /> }
          { settingMenu === "Notification" && <Notification /> }
          { settingMenu === "Billing & payment Info" && <BillingPayment /> }
        </div>

      </div>
    </div>
  )
}

export default Settings