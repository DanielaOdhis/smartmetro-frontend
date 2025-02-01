import React from 'react';
import './App.css';

const teamMembers = [
  {
    name: 'David Owino',
    role: 'Frontend Developer',
    photo: '/davie.jpeg',  // Correct path relative to public folder
  },
  {
    name: 'Priscilla Mumo',
    role: 'Backend Developer',
    photo: '/prisc.jpeg',  // Correct path relative to public folder
  },
  {
    name: 'Boniface Mwololo',
    role: 'Data Analyst',
    photo: '/peppy.jpeg',  // Correct path relative to public folder
  },
  {
    name: 'Daniela Odhiambo',
    role: 'Backend Developer',
    photo: '/daniela.jpeg',  // Correct path relative to public folder
  },
];


const About = () => {
  return (
    <div className="about-page">
      <header className="header">
        <div className="logo">SMART METRO</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/tracking">Tracking</a>
          <a href="/about">About</a>
          <a href="/feedback">Feedback</a>
        </nav>
        <div className="profile">
          <i className="user-icon">👤</i>
        </div>
      </header>

      <main className="about-content">
        {/* Introduction Section */}
        <section className="intro-section">
          <h1>About Smart Metro</h1>
          <p>
            Smart Metro is a real-time passenger information system designed to improve the commuting experience on the Nairobi-Juja Route.
          </p>
          <img src="/metrobus.jpg" alt="Thika Road" className="intro-image" />
        </section>

        {/* Mission and Vision Section */}
        <section className="mission-vision-section">
          <div className="mission">
            <h2>Mission</h2>
            <p>To provide accurate, real-time bus information for the Nairobi-Juja Route, making commuting more efficient and reliable.</p>
          </div>
          <div className="vision">
            <h2>Vision</h2>
            <p>To expand our system to other major routes in Kenya, transforming public transport nationwide.</p>
          </div>
        </section>

        {/* Future Plans Section */}
        <section className="future-plans-section">
          <h2>Future Plans</h2>
          <ul>
            <li>Add mobile app support for real-time notifications.</li>
            <li>Integrate the system with other transport systems in Kenya.</li>
            <li>Include features like route optimization for faster commutes.</li>
          </ul>
        </section>

        {/* Team Members Section */}
        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <img src={member.photo} alt={member.name} className="team-photo" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <a href="/tracking" className="cta-button">Track Your Bus Now</a>
        </section>
      </main>

      <footer className="footer">
        <ul>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        <div className="social-icons">
          <i className="facebook">F</i>
          <i className="twitter">T</i>
        </div>
      </footer>
    </div>
  );
};

export default About;
