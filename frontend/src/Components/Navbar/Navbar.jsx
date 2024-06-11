import React, {useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' height={120} />        
      </div>
      <ul className='nav-links'>
        <li onClick={() => {setMenu("shop")}}>Shop {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("ladies")}}>Ladies {menu === "ladies" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("kids apperal")}}>Kids Apperal {menu === "kids apperal" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("scents & decor")}}>Scents & Decor  {menu === "scents & decor" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("accessoories")}}>Accessories  {menu === "accessoories" ? <hr /> : <></>}</li>   
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