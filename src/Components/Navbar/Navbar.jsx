import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {

  const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
      <img src={assets.logo} alt='' className='logo'/>
      <ul className='navbar-menu'>
        <l1 onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</l1>
        <l1  onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</l1>
        <l1  onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app"?"active":""}>mobile-app</l1>
        <l1  onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us </l1>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
         <button>sign in</button>
      </div>
      
    </div>
  )
}

export default Navbar
