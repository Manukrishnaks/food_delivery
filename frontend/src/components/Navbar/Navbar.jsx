// import React, { useState } from 'react'
// import "./Navbar.css";
// import { assets } from '../../assets/assets'
// import{Link} from 'react-router-dom'
// const Navbar = ({setShowLogin}) => {
//   const[menu,setMenu] = useState("menu")
//   return (
//     <div className='navbar'>
//       <img src={assets.logo} alt="" className='logo'/>
//       <ul className='navbar-menu'>
//         <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
//         <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
//         <a href='#app-download' onClick={()=>setMenu("mobile")} className={menu==="mobile"?"active":""}>mobile</a>
//         <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a >
//       </ul>
//       <div className='navbar-right'>
//         < img src={assets.search_icon} alt=''/>
        
//         <div className='navbar-search-icon'>
//         <img src={assets.basket_icon} alt=''/>
//         <div className="dot"></div>

//         </div>
//         <button onClick={()=>setShowLogin(true)}>SignIn</button>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" className='logo' /> </Link>
      <ul className='navbar-menu'>
        <NavLink to='/' onClick={() => setMenu("home")} className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
          Menu
        </a>
        <a href='#app-download' onClick={() => setMenu("mobile")} className={menu === "mobile" ? "active" : ""}>
          Mobile
        </a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
          Contact Us
        </a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='search icon' />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt='basket icon' /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
