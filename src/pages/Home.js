import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <header style={{ padding: '2rem 0' }}>
        <h1 style={{ fontSize: '2rem' }}>Welcome to Doorstep Reach</h1>
        <p style={{ marginTop: '1rem', maxWidth: '600px' }}>
          A professional Dallas-based flyer & business card delivery platform.
          Customers pay per door, and steppers earn based on delivery volume and effort.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <Link to="/signup">
            <button>Create Account</button>
          </Link>
          <Link to="/login" style={{ marginLeft: '1rem' }}>
            <button style={{ backgroundColor: '#4b5563' }}>Login</button>
          </Link>
        </div>
      </header>

      <section>
        <h2>What We Offer</h2>
        <ul style={{ paddingLeft: '1.25rem' }}>
          <li>📍 Verified photo-by-door deliveries</li>
          <li>📊 Real-time dashboard and map routes</li>
          <li>⭐ Performance badges & account status levels</li>
          <li>🔐 Secure login & delivery history tracking</li>
        </ul>
      </section>

      <section>
        <h2>How It Works</h2>
        <ol style={{ paddingLeft: '1.25rem' }}>
          <li>Step 1: Businesses create a campaign</li>
          <li>Step 2: Steppers accept and begin delivering</li>
          <li>Step 3: Photo-proof is uploaded with GPS logs</li>
          <li>Step 4: Everyone gets paid fairly, based on effort</li>
        </ol>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '4rem', fontSize: '0.85rem', color: '#9ca3af' }}>
        &copy; {new Date().getFullYear()} Doorstep Reach · Based in Dallas, TX · doorstepreach@gmail.com
      </footer>
    </div>
  );
};

export default Home;
