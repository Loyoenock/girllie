import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' height={120} />        
      </div>
      <ul className='nav-links'>
        <li>Shop <hr /></li>
        <li>Ladies</li>
        <li>Kids Apperal</li>
        <li>Home & Decor</li>
        <li>Accessories</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart_icon} alt='cart' height={50} />
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar