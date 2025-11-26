import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; 
import { useCart } from "../context/CartContext";
import ApsLogo from '../components/Apslogo.png'
import "./Thankyou.css";

function ThankYou() {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    const savedOrder = localStorage.getItem("order");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  const handleBackHome = () => {
    localStorage.removeItem("order");
    navigate("/");
    clearCart(); 
  };

  const handleDownloadInvoice = () => {
    if (!order) return;

    const doc = new jsPDF();

    const imgWidth = 25;
    const imgHeight = 25;
    doc.addImage(ApsLogo, "PNG", 14, 10, imgWidth, imgHeight);
    doc.setFontSize(20);
    doc.setTextColor(75, 0, 130);
    doc.text("Ayesha Paper Store", 45, 20);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Invoice", 45, 28);
    doc.text(`Date: ${order.date || new Date().toLocaleDateString()}`, 150, 20);

    doc.setFontSize(11);
    doc.text(`Customer: ${order.address.name}`, 14, 45);
    doc.text(`Address: ${order.address.address}`, 14, 52);
    doc.text(`${order.address.city} - ${order.address.pincode}`, 14, 59);
    doc.text(`Phone: ${order.address.phone}`, 14, 66);
    doc.text(`Payment: ${order.paymentMethod || "UPI / Online"}`, 14, 73);

    const tableData = order.items.map((item, i) => [
      i + 1,
      item.name,
      item.qty,
      `₹${item.price}`,
      `₹${item.price * item.qty}`,
    ]);

    autoTable(doc, {
      startY: 80,
      head: [["#", "Product", "Qty", "Price", "Total"]],
      body: tableData,
      theme: "grid",
      headStyles: { fillColor: [102, 51, 153], textColor: [255, 255, 255] }, 
      styles: { fontSize: 11 },
      alternateRowStyles: { fillColor: [245, 240, 255] },
    });

    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(`Grand Total: ₹${order.totalAmount}`, 14, finalY);

    doc.setFontSize(11);
    doc.setTextColor(75, 0, 130);
    doc.text("Thank you for shopping with Ayesha Paper Store!", 14, finalY + 10);
    doc.text("We appreciate your business 💜", 14, finalY + 16);

    doc.save(`Invoice_${order.address.name}_${Date.now()}.pdf`);
       clearCart();
    localStorage.removeItem("order");
  };

  if (!order) {
    return (
      <div className="thankyou-container">
        <h2>No order found ❌</h2>
        <button className="thankyou-btn" onClick={handleBackHome}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <h2>🎉 Thank You for Your Order!</h2>
        <p>Your order has been placed successfully.</p>

        <h3>🧾 Order Summary</h3>
        <ul className="order-summary-list">
          {order.items.map((item) => (
            <li key={item.id} className="summary-item">
              <img src={item.image} alt={item.name} className="summary-item-img" />
              <div className="summary-item-info">
                <p className="item-name">{item.name}</p>
                <p>Qty: {item.qty}</p>
                <p>₹{item.price * item.qty}</p>
              </div>
            </li>
          ))}
        </ul>

        <p><strong>Total:</strong> ₹{order.totalAmount}</p>
        <p><strong>Payment:</strong> {order.paymentMethod || "UPI / Online"}</p>
        <p>
          <strong>Address:</strong> {order.address.address}, {order.address.city} -{" "}
          {order.address.pincode}
        </p>
        <p><strong>📞</strong> {order.address.phone}</p>

        <div className="thankyou-buttons">
          <button onClick={handleBackHome} className="thankyou-btn">
            Back to Home
          </button>
          <button onClick={handleDownloadInvoice} className="invoice-btn">
            Download Invoice 📄
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
