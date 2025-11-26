// import React from "react";
// import { useCart } from "../context/CartContext";
// import "./Cart.css";

// function Cart() {
//   const { cart, removeFromCart, clearCart, incrementQty, decrementQty,continuecart } = useCart();
//   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//   return (
//     <div className="cart-container">
//       <h2 className="cart-header">🛒 Your Shopping Cart</h2>

//       {cart.length === 0 ? (
//         <p className="empty-cart">Your cart is empty. Start shopping now!</p>
//       ) : (
//         <>
//           <div className="cart-items">
//             {cart.map((item) => (
//               <div className="cart-item" key={item.id}>
//                 <div className="cart-item-left">
//                   <img src={item.image} alt={item.name} />
//                   <div>
//                     <p className="cart-item-name">{item.name}</p>
//                     <p className="cart-item-price">₹{item.price}</p>
//                   </div>
//                 </div>

//                 <div className="cart-actions">
//                   <button className="qty-btn" onClick={() => decrementQty(item.id)}>-</button>
//                   <span>{item.qty}</span>
//                   <button className="qty-btn" onClick={() => incrementQty(item.id)}>+</button>
//                   <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="cart-summary">
//             <p className="cart-total">Total: ₹{total.toFixed(2)}</p>
//             <div className="cart-btn">
//             <button className="checkout-btn" onClick={clearCart}>Clear Cart</button>
//             <button className='checkout-btn'  onClick={continuecart}>Continue</button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, clearCart, incrementQty, decrementQty } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const navigate = useNavigate();

  // Handle continue button click
  const handleContinue = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      // Not logged in → go to login page
      navigate("/login", { state: { from: "/shipping" } });
    } else {
      // Logged in → go to shipping page
      navigate("/shipping");
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Start shopping now!</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-left">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">₹{item.price}</p>
                  </div>
                </div>

                <div className="cart-actions">
                  <button className="qty-btn" onClick={() => decrementQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button className="qty-btn" onClick={() => incrementQty(item.id)}>+</button>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p className="cart-total">Total: ₹{total.toFixed(2)}</p>
            <div className="cart-btn">
              <button className="checkout-btn" onClick={clearCart}>Clear Cart</button>
              <button className="checkout-btn" onClick={handleContinue}>Continue</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
