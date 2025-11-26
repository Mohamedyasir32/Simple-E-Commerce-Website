import React from "react";
import { useCart } from "../context/CartContext";
import { useParams, useNavigate } from "react-router-dom";
import pencil from './products_img/2b_pencils.jpg'
import pencilbox from './products_img/Apsara_pencil_box.jpg'
import Triangular_pencil from "./products_img/DOMS_ZOOM_TRIANGULAR_pencilBox.jpg";
import brushpens from "./products_img/Doms-Pastel-Brush-Pens-Doms.webp";
import colorpencil from "./products_img/Doms_color_pencil.jpg";
import DomsEraser from "./products_img/Doms_eraser.webp";
import injectpen from "./products_img/Doms_injectRoller_pens.jpg"
import domspencil from "./products_img/Doms_pencil.jpg";
import modelingbox from "./products_img/MODLING-CLAY-BOX-01.webp";
import ballpointpen from "./products_img/ballpoint_pen.jpg";
import colorpens from "./products_img/color_pens.jpg";
import domsarts from "./products_img/doms-art-apps-NXT-gift-pack-4-.jpg";
import eraser_bottle from './products_img/eraser_bottle.jpg';
import wowkit from'./products_img/doms_wowkit.jpg';
import mechanical_pencil1 from './products_img/mechanical_pencil1.jpg';
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); 
  
  const products = [
    { id: 1, image: pencil, name: "2B-pencil-box", price: 45, rating: 4, description: "High-quality graphite pencils for smooth writing." },
    { id: 2, image: pencilbox, name: "Apsara_pencilbox", price: 60, rating: 5, description: "Compact pencil box with stylish design." },
    { id: 3, image: Triangular_pencil, name: "Triangular-pencil-box", price: 85, rating: 4, description: "Ergonomic design for easy grip." },
    { id: 4, image: brushpens, name: "Color Pens", price: 50, rating: 3.5, description: "Smooth coloring brush pens." },
    { id: 5, image: colorpencil, name: "Color-pencil-box", price: 45, rating: 4, description: "Vibrant color pencils for drawing and art." },
    { id: 6, image: DomsEraser, name: "Doms Eraser", price: 50, rating: 4, description: "Soft eraser for clean erasing." },
    { id: 7, image: injectpen, name: "Inject Pens", price: 75, rating: 4, description: "Roller pens with smooth ink flow." },
    { id: 8, image: domspencil, name: "Doms Pencil", price: 45, rating: 4, description: "Durable pencils for school and office use." },
    { id: 9, image: modelingbox, name: "Modeling Clay Box", price: 35, rating: 4, description: "Colorful modeling clay for creative fun." },
    { id: 10, image: ballpointpen, name: "Ball Point Pen", price: 20, rating: 4, description: "Reliable pens for everyday writing." },
    { id: 11, image: colorpens, name: "Color Pens", price: 75, rating: 4, description: "Set of bright color pens for design projects." },
    { id: 12, image: domsarts, name: "Doms Arts Box", price: 245, rating: 4, description: "Complete art kit for kids and artists." },
    { id: 13, image: wowkit, name: "Doms Wow Kit", price: 49, rating: 4, description: "Creative art kit with sketch pens and tools." },
    { id: 14, image: eraser_bottle, name: "Eraser Bottle", price: 95, rating: 3, description: "Pack of multiple erasers in bottle form." },
    { id: 15, image: mechanical_pencil1, name: "Mechanical Pencil", price: 25, rating: 5, description: "Precision mechanical pencil for neat writing." },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found!</h2>;
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} has been added to your cart 🛒`);
  };


  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="details-card">
        <img src={product.image} alt={product.name} className="details-img" />
        <div className="details-info">
          <h2>{product.name}</h2>
          <p className="details-price">₹{product.price}</p>
          <p>{product.description}</p>
          <p>⭐ {product.rating}</p>
          <button className="add-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
