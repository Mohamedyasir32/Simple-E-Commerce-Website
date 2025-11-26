import React from "react";
import './about.css'

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      <section className="about-section">
        <h2>Welcome</h2>
        <p>
          Welcome to <strong>APS Stationery</strong> — your one-stop destination
          for high-quality school, office, and art supplies. We believe that
          every great idea begins with the right tools, and our mission is to
          provide everything you need to make learning, working, and creating
          more enjoyable.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to offer top-quality stationery products that inspire
          creativity, productivity, and learning. We are committed to providing
          affordable, reliable, and eco-friendly stationery solutions that cater
          to students, professionals, and artists alike. By combining quality
          with innovation, we strive to make every writing, drawing, or
          organizing experience smoother and more meaningful.
        </p>
        <p>
          We also believe in supporting education and creativity by continuously
          expanding our product range and keeping up with modern trends and
          customer needs.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          Our vision is to become the most trusted and customer-loved stationery
          brand known for quality, variety, and service excellence. We aim to
          build a community of learners, creators, and professionals who rely on
          our products to express their ideas and achieve their goals.
        </p>
        <p>
          We envision a future where APS Stationery stands as a symbol of
          creativity, learning, and innovation — bringing smiles and inspiration
          to every desk, classroom, and workspace.
        </p>
      </section>

      <section className="about-section">
        <h2>Why Choose Us</h2>
        <ul>
          <li>Extensive range of school, office, and art supplies</li>
          <li>Affordable prices and regular offers</li>
          <li>Trusted brands and top-notch quality</li>
          <li>Fast delivery and excellent customer support</li>
          <li>Commitment to eco-friendly and sustainable products</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Promise</h2>
        <p>
          We promise to provide every customer with an exceptional shopping
          experience and products that bring value, inspiration, and joy. At APS
          Stationery, we don’t just sell supplies — we help you write, draw, and
          create your story.
        </p>
      </section>
    </div>
  );
};

export default About;
