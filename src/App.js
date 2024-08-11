import './App.css';
import Home from './pages/home';
import Cart from './pages/cart';
import CategoriesProduct from './pages/categoriesProduct';
import ProductDetail from './pages/productDetail';
import OrderDetail from './pages/orderDetail';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AnimatePresence, motion } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation(); // Get current location for AnimatePresence

  // Define the animation settings for the "push in" effect
  const pageTransition = {
    initial: { x: "30%", opacity: 0.3 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-80%", opacity: 0.3 },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
              transition={{ duration: 0.3 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/cart"
          element={
            <motion.div
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
              transition={{ duration: 0.3 }}
            >
              <Cart />
            </motion.div>
          }
        />
        <Route
          path="/category/:categoryId"
          element={
            <motion.div
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
              transition={{ duration: 0.3 }}
            >
              <CategoriesProduct />
            </motion.div>
          }
        />
        <Route
          path="/dish/:dishId"
          element={
            <motion.div
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
              transition={{ duration: 0.3 }}
            >
              <ProductDetail />
            </motion.div>
          }
        />
        <Route
          path="/order"
          element={
            <motion.div
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
              transition={{ duration: 0.3 }}
            >
              <OrderDetail />
            </motion.div>
          }
        />
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
