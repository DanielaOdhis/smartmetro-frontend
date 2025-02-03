import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">SMART METRO</div>
        <nav className="nav">
          <a href="/tracking">Tracking</a>
          <a href="/about">About</a>
          <a href="/feedback">Feedback</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Real-Time Bus Tracking for a Smarter Commute</h1>
        <p>Track buses on the Nairobi-Juja route and get live updates on arrival times.</p>
        <a href="/tracking" className="cta-button">Start Tracking</a>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Real-Time Tracking</h2>
          <p>See live bus locations and estimated arrival times.</p>
        </div>
        <div className="feature">
          <h2>Smart Notifications</h2>
          <p>Get alerts for bus arrivals and route updates.</p>
        </div>
        <div className="feature">
          <h2>Traffic Insights</h2>
          <p>Check road congestion levels to plan your journey better.</p>
        </div>
      </section>

      <footer className="footer">
        <ul>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
