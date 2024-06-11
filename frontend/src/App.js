import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'; // Import the LoginSignup component

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/ladies" element={<ShopCategory category="ladies" />} />      
        <Route path="/kids apparel" element={<ShopCategory category="kids apparel" />} />
        <Route path="/scents & decor" element={<ShopCategory category="scents & decor" />} />
        <Route path="/accessories" element={<ShopCategory category="accessories" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
