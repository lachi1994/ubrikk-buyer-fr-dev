import React, { useState } from 'react';
import { HomeFilled, HistoryOutlined, FolderFilled, QuestionCircleFilled, SettingFilled } from '@ant-design/icons'
import './sidebar.css'
import {NavLink} from 'react-router-dom'
function Sidebar(props) {
  

	return (
		
		<div className="menu-bar" >
			<div className="menu-logo">
				<p>Menu</p>
			</div>
		<div className="menu-items">

			 <div className='item-names'><NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to='/profile'  >
				  <HomeFilled style={{ fontSize: "25px" }} />&nbsp;
				  <span className='span-name'>Home</span>
			 </NavLink></div>

			 <div className='item-names'><NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to='/order' >
				  <HistoryOutlined style={{ fontSize: "25px" }} />&nbsp;
				  <span className='span-name'>Orders</span>
			 </NavLink></div>

			 <div className='item-names'><NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to='/drafts' >
				  <FolderFilled style={{ fontSize: "25px" }} />&nbsp;
				  <span className='span-name'>Drafts</span>
			 </NavLink></div>
			 <hr style={{ width: "85%" }} />
			 <div className='item-names'><NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to='/help'  >
				  <QuestionCircleFilled style={{ fontSize: "25px" }} />&nbsp;
				  <span className='span-name'>Help</span>
			 </NavLink></div>

			 <div className='item-names'><NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to='/settings' >
				  <SettingFilled style={{ fontSize: "25px" }} />&nbsp;
				  <span className='span-name'>Settings</span>
			 </NavLink></div>

			

			
			 </div>
			 </div>

	)
}

export default Sidebar
