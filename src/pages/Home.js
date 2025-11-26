import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaShoppingCart } from "react-icons/fa";
import jumbatron_img from './Homepage_img/Apsboxjumb_img.png';
import arts from './Homepage_img/arts_products.jpg'
import school from './Homepage_img/schl_stationary_img.jpg'
import college from './Homepage_img/collge_statinary.jpg'
import ecoproducts from './Homepage_img/ecofriendly_img.jpg'
import customize from './Homepage_img/customize_img.jpg'
import notebk from './Homepage_img/notebkdiaries.jpg'
import "./Home.css"
import Footer from "../components/Footer";

function Home() {
   const navigate = useNavigate();

  const shopClick = () => {
     document.getElementById('products').scrollIntoView({ behavior:"auto" });
  };
  const contactClick = () => {
    navigate("/contact");
  }
   const exploreproducts = () => {
    navigate("/product"); 

  };
  const knowmoreclick =() =>{
    navigate("/about")
  }
  return (
    <div className="page">
      <section id="home">
                <div className='home-container'>
                  <div className='home-content'>
                      <h1>
                        Your One-Stop Destination for Quality Notebooks,Papers And Stationarys 
                      </h1>
                      <p>
                        From Office Supplies to Good Quality for creative art Materials -We bring you everything you need to work;learn and create
                      </p>
                      <div className='home-button'>
                        <button onClick={shopClick}>ShopNow <FaShoppingCart style={{ color: "white", fontSize: "1rem" ,alignItems:'center'}} /></button>
                        <button onClick={contactClick}>ContactUs  <FaPhoneAlt style={{ color: "white", fontSize: "1rem" }} /></button>
                      </div>
                  </div>
                  <div className='home-jumbatron'>
                    <img src={jumbatron_img} alt='exploreProducts'/>
                  </div>
                </div>
              </section>
              <section id="products">
                <div className='products-page'>
                  <h1>Our Products</h1>
                  <h3>To Explore products</h3>
                  <div className='products-categories'>
                    <div className='explore-products'>
                      <div className='products-card'>
                        <img src={school} alt='schoolProducts'/>
                        <div className='card-footer'>
                          <h1>School Stationary products</h1>
                          <button onClick={exploreproducts}>Explore</button>
                        </div>
                      </div>

                      <div className='products-card'>
                        <img src={college} alt='schoolProducts'/>
                        <div className='card-footer'>
                          <h1>College Stationary products</h1>
                          <button onClick={exploreproducts}>Explore</button>
                        </div>
                      </div>
                      
                      
                      <div className='products-card'>
                        <img src={arts} alt='schoolProducts'/>
                        <div className='card-footer'>
                          <h1>Arts Stationary products</h1>
                          <button onClick={exploreproducts}>Explore</button>
                        </div>
                      </div>

                       <div className='products-card'>
                        <img src={customize} alt='customizeProducts'/>
                        <div className='card-footer'>
                          <h1>Customized Stationary products</h1>
                          <button onClick={exploreproducts}>Explore</button>
                        </div>
                      </div>

                       <div className='products-card'>
                        <img src={notebk} alt='notebookProducts'/>
                        <div className='card-footer'>
                          <h1>Writing Stationary products</h1>
                          <button onClick={exploreproducts}>Explore</button>
                        </div>
                      </div>

                       <div className='products-card'>
                        <img src={ecoproducts} alt='ecoProducts'/>
                        <div className='card-footer'>
                          <h1>Eco-firendly Stationary products</h1>
                          <button onClick={exploreproducts}>Explore</button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </section>
              <section id="about">
                <div className='about-page'>
                  <h1>About Us</h1>
                  <p>Ayesha paper store is an exclusive wholesale stationery supplier online catering to a diverse clientele. Our core customers encompass businesses of all sizes, retailers, schools, colleges, industries, and offices across select metro rural areas of cuddalore. Our online stationery wholesalers platform ensures a seamless and efficient purchasing experience for businesses and institutions. Every client receives personalized service and access to a wide range of quality stationery products. With over a decade of expertise in the industry, Ayesha Paper Store is committed to meeting the distinct needs of a variety of businesses across diverse sectors as reliable bulk wholesale stationery suppliers providing tailored solutions to enhance their operational efficiency and success.</p>
                  <button onClick={knowmoreclick}>Know More</button>
                </div>
              </section>
              <section id="contact">
                <div className='contact-page'>
                    <h1>We’d Love to Hear from You!</h1>
                    <p>Whether you’re looking for a specific stationery item, planning a bulk order, or just want to learn more about our products — our team is here to help.</p>

                    <h2>Get in Touch</h2>
                   <div class="contact-info">
                   <div class="contact-item"><span>📍</span> <strong>Ayesha Paper Store</strong>,new bajaar,lalpet, Chidambaram main road – 608303, Tamil Nadu, India</div>
                   <div class="contact-item"><span>📞</span> +91 8072364306</div>
                   <div class="contact-item"><span>✉️</span> info@ayeshapaperstore.com</div>
                   <div class="contact-item"><span>🕒</span> Monday – sunday: 8:00 AM to 9:00 PM </div>
                  </div>

                  <h2>Send Us a Message</h2>
                  <p>We usually reply within 24 hours!</p>
                   <form>
                 <input type="text" placeholder="Your Name" required/>
                 <input type="email" placeholder="Email Address" required/>
                 <input type="text" placeholder="Phone Number" required/>
                 <input type="text" placeholder="Subject" required/>
                 <textarea placeholder="Message"></textarea>
                 <button type="submit" class="btn">Send Message</button>
                 </form>

                  <div class="business">
                  <h2>Business Enquiries</h2>
                  <p>For bulk orders, corporate gifting, or wholesale supply, please contact:  
              <strong>business@Apspaper.com</strong></p>
                 </div>
                </div>
              </section>
              <Footer/>
    </div>
  );
}

export default Home;
