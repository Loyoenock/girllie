import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import banner_ladies from './Components/Assets/banner_ladies.png'
import banner_kids from './Components/Assets/banner_kids.png'
import banner_accessories from './Components/Assets/banner_accessories.png'
import banner_decor from './Components/Assets/banner_decor.png'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/ladies" element={<ShopCategory banner={banner_ladies} category="ladies" />} />      
        <Route path="/kids apparel" element={<ShopCategory banner={banner_kids} category="kids apparel" />} />
        <Route path="/scents & decor" element={<ShopCategory banner={banner_decor} category="scents & decor" />} />
        <Route path="/accessories" element={<ShopCategory banner={banner_accessories} category="accessories" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
