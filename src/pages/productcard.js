import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaHeart, FaStar, FaRegStar,FaTag } from "react-icons/fa";
import "./productcard.css";
function ProductCard({
  id,
  image,
  name,
  price,
  description,
  rating = 3,
  discount = 0,
  inStock = true,
  onToggleWishlist,
  isWishlisted = false,
}) {
  const { addToCart } = useCart(); 

  const stars = Array(5)
    .fill(0)
    .map((_, i) =>
      i < rating ? (
        <FaStar key={i} className="star filled" />
      ) : (
        <FaRegStar key={i} className="star" />
      )
    );

  const handleAddToCart = () => {
    addToCart({ id, name, image, price })
    alert(`${id} added to cart!`);
  };


  return (
    <div className="product-card">
      {discount > 0 && <span className="badge discount"><FaTag style={{ color: "white", fontSize: "14px" }} />{discount}%</span>}
      {!inStock && <span className="badge out-of-stock">Out of Stock</span>}

      <button className="wishlist-btn" onClick={onToggleWishlist}>
        <FaHeart className={isWishlisted ? "heart wishlisted" : "heart"} />
      </button>


      <img src={image} alt={name} className="product-img" />

      <h3 className="product-name">{name}</h3>
      <p className="product-desc">{description}</p>

      <div className="rating">{stars}</div>

      <div className="product-footer">
        <span className="product-price">
          ₹{price} {discount > 0 && <span className="old-price">₹{(price / (1 - discount / 100)).toFixed(0)}</span>}
        </span>
        <button className="add-btn" disabled={!inStock} onClick={handleAddToCart}>
          {inStock ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
       <Link to={`/product/${id}`} className="details-link">
        View Details →
      </Link> 
      
    </div>
   
  );
}

export default ProductCard;
