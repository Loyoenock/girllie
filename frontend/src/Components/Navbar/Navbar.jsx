import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' height={150} />
        <p>Your Style Secret</p>
      </div>
      <ul className='nav-links'>
        <li>Shop</li>
        <li>Ladies</li>
        <li>Kids Apperal</li>
        <li>Home & Decor</li>
        <li>Accessories</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart_icon} alt='cart' height={50} />
      </div>
    </div>
  )
}

export default Navbar