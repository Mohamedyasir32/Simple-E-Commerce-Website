import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Shipping.css";

function Shipping() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !address.name.trim() ||
      !address.phone.trim() ||
      !address.address.trim() ||
      !address.city.trim() ||
      !address.pincode.trim()
    ) {
      alert("⚠️ Please fill in all the fields!");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const orderDetails = {
        items: cart,
        totalAmount,
        address,
        date: new Date().toLocaleString(),
      };

 
      localStorage.setItem("order", JSON.stringify(orderDetails));

      navigate("/payment");
    }, 1500); 
  };

  if (isLoading) {
    return (
      <div className="loading-box">
        <div className="spinner"></div>
        <p>Saving your order...</p>
      </div>
    );
  }

  return (
    <div className="shipping-container">
      <h2>Shipping Details</h2>

      {cart.length > 0 ? (
        <div className="shipping-content">
         
          <div className="shipping-form">
            <form onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={address.name}
                onChange={handleChange}
              />

              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={address.phone}
                onChange={handleChange}
              />

              <label>Address</label>
              <textarea
                name="address"
                placeholder="Enter full address"
                value={address.address}
                onChange={handleChange}
              ></textarea>

              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                value={address.city}
                onChange={handleChange}
              />

              <label>Pincode</label>
              <input
                type="text"
                name="pincode"
                placeholder="Enter pincode"
                value={address.pincode}
                onChange={handleChange}
              />

              <button type="submit" className="place-order-btn">
                Proceed to Payment
              </button>
            </form>
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <ul className="order-list">
              {cart.map((item) => (
                <li key={item.id} className="order-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="order-item-image"
                  />
                  <div className="order-item-info">
                    <p className="order-item-name">{item.name}</p>
                    <p className="order-item-qty">Qty: {item.qty}</p>
                    <p className="order-item-price">
                      ₹{item.price * item.qty}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <hr />
            <p className="order-total">
              <strong>Total Amount: ₹{totalAmount}</strong>
            </p>
          </div>
        </div>
      ) : (
        <p className="empty">🛒 No items to ship</p>
      )}
    </div>
  );
}

export default Shipping;

