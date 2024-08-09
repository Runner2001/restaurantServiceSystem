import './App.css';
import Home from './pages/home';
import Cart from './pages/cart';
import CategoriesProduct from './pages/categoriesProduct';
import ProductDetail from './pages/productDetail';
import OrderDetail from './pages/orderDetail';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation(); // Get current location for AnimatePresence

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/category/:categoryId' element={<CategoriesProduct />} />
        <Route path='/dish/:dishId' element={<ProductDetail />} />
        <Route path='/order' element={<OrderDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <AnimatedRoutes />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;