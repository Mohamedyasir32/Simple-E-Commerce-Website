import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaShoppingCart,
  FaHome,
  FaShoppingBag,
  FaInfoCircle,
  FaPhoneAlt,
  FaUserCircle,
  FaSignInAlt,
  FaUser,
  FaSignOutAlt
} from "react-icons/fa";
import { useCart } from "../context/CartContext"; 
import Apslogo from "./Apslogo.png";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = (item, path) => {
    setActive(item);
    navigate(path);
    setIsOpen(false);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }

    const path = location.pathname;
    if (path === "/") setActive("home");
    else if (path.startsWith("/product")) setActive("product");
    else if (path.startsWith("/cart")) setActive("cart");
    else if (path.startsWith("/about")) setActive("about");
    else if (path.startsWith("/contact")) setActive("contact");
    else if (path.startsWith("/shipping")) setActive("shipping");
    else if (path.startsWith("/profile")) setActive("profile");
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowProfileMenu(false);
    navigate("/login");
  };

  const toggleProfileMenu = () => setShowProfileMenu(!showProfileMenu);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-menu")) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      {/* 🔹 Logo */}
      <div className="logo" onClick={() => handleClick("home", "/")}>
        <img src={Apslogo} alt="logo" />
        <span>Ayesha Paper Store</span>
      </div>

      {/* 🔹 Nav Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <button
          onClick={() => handleClick("home", "/")}
          className={active === "home" ? "active" : ""}
        >
          <FaHome /> Home
        </button>

        <button
          onClick={() => handleClick("product", "/product")}
          className={active === "product" ? "active" : ""}
        >
          <FaShoppingBag /> Product
        </button>

        <button
          onClick={() => handleClick("cart", "/cart")}
          className={`cart-btn ${active === "cart" ? "active" : ""}`}
        >
          <FaShoppingCart /> Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>

        <button
          onClick={() => handleClick("about", "/about")}
          className={active === "about" ? "active" : ""}
        >
          <FaInfoCircle /> About
        </button>

        <button
          onClick={() => handleClick("contact", "/contact")}
          className={active === "contact" ? "active" : ""}
        >
          <FaPhoneAlt /> Contact
        </button>
{/* 
        <button
          onClick={() => handleClick("shipping", "/shipping")}
          className={active === "shipping" ? "active" : ""}
        >
          <FaTruck /> Shipping
        </button> */}

        {/* 👤 Profile / Login Dropdown */}
        <div className="profile-menu">
          <button className="profile-icon" onClick={toggleProfileMenu}>
            <FaUserCircle size={20} />
            {user ? (
              <span>{user.email?.split("@")[0]}</span>
            ) : (
              <span>Login</span>
            )}
          </button>

          {showProfileMenu && (
            <div className="dropdown">
              {user ? (
                <>
                  <button
                    onClick={() => {
                      handleClick("profile", "/profile");
                      setShowProfileMenu(false);
                    }}
                  >
                    <FaUser /> Profile
                  </button>
                  <button onClick={handleLogout}>
                    <FaSignOutAlt /> Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    handleClick("login", "/login");
                    setShowProfileMenu(false);
                  }}
                >
                  <FaSignInAlt /> Login
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ☰ mobile menu icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;

