import React, { useState } from "react";
import ProductCard from "./productcard";
import Pagination from "./Pagination"

import pencil from "./products_img/2b_pencils.jpg";
import pencilbox from "./products_img/Apsara_pencil_box.jpg";
import Triangular_pencil from "./products_img/DOMS_ZOOM_TRIANGULAR_pencilBox.jpg";
import brushpens from "./products_img/Doms-Pastel-Brush-Pens-Doms.webp";
import colorpencil from "./products_img/Doms_color_pencil.jpg";
import DomsEraser from "./products_img/Doms_eraser.webp";
import injectpen from "./products_img/Doms_injectRoller_pens.jpg";
import domspencil from "./products_img/Doms_pencil.jpg";
import modelingbox from "./products_img/MODLING-CLAY-BOX-01.webp";
import ballpointpen from "./products_img/ballpoint_pen.jpg";
import colorpens from "./products_img/color_pens.jpg";
import domsarts from "./products_img/doms-art-apps-NXT-gift-pack-4-.jpg";
import eraser_bottle from "./products_img/eraser_bottle.jpg";
import wowkit from "./products_img/doms_wowkit.jpg";
import mechanical_pencil1 from "./products_img/mechanical_pencil1.jpg";

function Product() {
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 6;

  const products = [
    { id: 1, image: pencil, name: "2B-pencil-box", price: 45, rating: 4, discount: 10, inStock: true },
    { id: 2, image: pencilbox, name: "Apsara_pencilbox", price: 60, rating: 5, discount: 0, inStock: false },
    { id: 3, image: Triangular_pencil, name: "Triangular-pencil-box", price: 85, rating: 4, discount: 10, inStock: true },
    { id: 4, image: brushpens, name: "colorpens", price: 50, rating: 3.5, discount: 10, inStock: true },
    { id: 5, image: colorpencil, name: "color-pencil-box", price: 45, rating: 4, discount: 3, inStock: true },
    { id: 6, image: DomsEraser, name: "Doms_eraser", price: 50, rating: 4, discount: 2, inStock: true },
    { id: 7, image: injectpen, name: "Inject_pens", price: 75, rating: 4, discount: 8, inStock: true },
    { id: 8, image: domspencil, name: "Doms-pencil", price: 45, rating: 4, discount: 3, inStock: true },
    { id: 9, image: modelingbox, name: "modeling-box", price: 35, rating: 4, discount: 10, inStock: true },
    { id: 10, image: ballpointpen, name: "Ball_point_pen", price: 20, rating: 4, discount: 2, inStock: true },
    { id: 11, image: colorpens, name: "Color_pens", price: 75, rating: 4, discount: 0, inStock: true },
    { id: 12, image: domsarts, name: "Doms_arts-box", price: 245, rating: 4, discount: 10, inStock: true },
    { id: 13, image: wowkit, name: "Doms_Wow_kit", price: 49, rating: 4, discount: 0, inStock: true },
    { id: 14, image: eraser_bottle, name: "Doms_Eraser_bottle", price: 95, rating: 3, discount: 5, inStock: true },
    { id: 15, image: mechanical_pencil1, name: "Mechanical_pencil", price: 25, rating: 5, discount: 2, inStock: true },
  ];

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  // const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (id) => {
    alert(`${id} added to cart!`);
  };
const filteredProducts = products.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase())).filter((p) => {
  if (filter === "lowprice") return p.price < 50;
  if (filter === "highprice") return p.price >= 50;
  if (filter === "instock") return p.inStock;
  if (filter === "rating4") return p.rating >= 4;
  return true;
});

const startIndex = (currentPage - 1) * itemsPerPage;
const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);


  return (
    <div className="productpage">
       <div className="product-toolbar">
  <div className="search-bar">
    <input
      type="text"
      placeholder="🔍 Search products..."
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
      }}
      className="search-input"
    />
  </div>

  <div className="filter-bar">
    <select
      value={filter}
      onChange={(e) => {
        setFilter(e.target.value);
        setCurrentPage(1);
      }}
      className="filter-select"
    >
      <option value="all">All Products</option>
      <option value="lowprice">Price Below ₹50</option>
      <option value="highprice">Price ₹50 and Above</option>
      <option value="instock">In Stock</option>
      <option value="rating4">Rating 4★ & Above</option>
    </select>
  </div>
</div>
        <div className="product-grid">
        {currentProducts.length > 0 ? (
          currentProducts.map((p) => (
            <ProductCard
              key={p.id}
              {...p}
              isWishlisted={wishlist.includes(p.id)}
              onToggleWishlist={() => toggleWishlist(p.id)}
              onAddToCart={() => handleAddToCart(p.id)}
            />
          ))
        ) : (
          <p className="no-products">No products match your filter 😢</p>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Product;
