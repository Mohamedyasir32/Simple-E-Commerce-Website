// import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/product";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/Authcontext";
import Shipping from "./pages/Shipping";
import ThankYou from "./pages/Thankyou";
import Payment from "./pages/Payment";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Shipping" element={<Shipping/>}/>
          <Route path="/Thankyou" element={<ThankYou/>}/>
          <Route path="/Payment" element={<Payment/>}/>
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
