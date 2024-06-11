import React, {useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' height={120} />        
      </div>
      <ul className='nav-links'>
        <li onClick={() => {setMenu("shop")}}> <Link to="/" style={{textDecoration: "none"}}> Shop </Link> {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("ladies")}}> <Link to="/ladies" style={{textDecoration: "none"}}> Ladies </Link> {menu === "ladies" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("kids apperal")}}><Link to="/kids apperal" style={{textDecoration: "none"}}>Kids Apperal</Link> {menu === "kids apperal" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("scents & decor")}}><Link to="/scents & decor" style={{textDecoration: "none"}}>Scents & Decor</Link>{menu === "scents & decor" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("accessoories")}}><Link to="/accessoories" style={{textDecoration: "none"}}>Accessories </Link> {menu === "accessoories" ? <hr /> : <></>}</li>   
      </ul>
      <div className='nav-login-cart'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"    ><img src={cart_icon} alt='cart' height={50} /></Link>
        
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar