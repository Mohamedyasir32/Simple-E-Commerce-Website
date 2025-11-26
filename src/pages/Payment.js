import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const [order, setOrder] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState("UPI");
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrder = localStorage.getItem("order");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  const handlePayment = () => {
    if (!selectedMethod) {
      alert("Please select a payment method!");
      return;
    }

    setProcessing(true);

    setTimeout(() => {
      const updatedOrder = {
        ...order,
        paymentMethod: selectedMethod,
        status: "Paid",
      };
      localStorage.setItem("order", JSON.stringify(updatedOrder));
      navigate("/thankyou");
    }, 2000); 
  };

  if (!order) {
    return <p className="empty">No order details found.</p>;
  }

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2>💳 Choose Payment Method</h2>
        <p>Total Amount: <strong>₹{order.totalAmount}</strong></p>

        <div className="payment-methods">
          
          <label className={`method-card ${selectedMethod === "UPI" ? "selected" : ""}`}>
            <input
              type="radio"
              name="method"
              value="UPI"
              checked={selectedMethod === "UPI"}
              onChange={() => setSelectedMethod("UPI")}
            />
            <div className="method-info">
              <h3>📱 UPI Payment</h3>
              <p>Pay using Google Pay, PhonePe, or Paytm</p>
            </div>
          </label>

          <label className={`method-card ${selectedMethod === "CARD" ? "selected" : ""}`}>
            <input
              type="radio"
              name="method"
              value="CARD"
              checked={selectedMethod === "CARD"}
              onChange={() => setSelectedMethod("CARD")}
            />
            <div className="method-info">
              <h3>💳 Debit / Credit Card</h3>
              <p>Visa, MasterCard, RuPay supported</p>
            </div>
          </label>

          <label className={`method-card ${selectedMethod === "COD" ? "selected" : ""}`}>
            <input
              type="radio"
              name="method"
              value="COD"
              checked={selectedMethod === "COD"}
              onChange={() => setSelectedMethod("COD")}
            />
            <div className="method-info">
              <h3>💵 Cash on Delivery</h3>
              <p>Pay when you receive your order</p>
            </div>
          </label>
        </div>

        {selectedMethod === "UPI" && (
          <div className="upi-details">
            <h4>Pay to UPI ID:</h4>
            <p><strong>apsstore@upi</strong></p>
            <p>Use any UPI app to make the payment.</p>
          </div>
        )}

        {selectedMethod === "CARD" && (
          <div className="card-form">
            <input type="text" placeholder="Card Number" maxLength="16" />
            <div className="card-row">
              <input type="text" placeholder="MM/YY" maxLength="5" />
              <input type="text" placeholder="CVV" maxLength="3" />
            </div>
            <input type="text" placeholder="Card Holder Name" />
          </div>
        )}

        {processing ? (
          <div className="processing-box">
            <div className="spinner"></div>
            <p>Processing your payment...</p>
          </div>
        ) : (
          <button className="pay-btn" onClick={handlePayment}>
            ✅ {selectedMethod === "COD" ? "Place Order" : "I Have Paid"} ₹{order.totalAmount}
          </button>
        )}
      </div>
    </div>
  );
}

export default Payment;
