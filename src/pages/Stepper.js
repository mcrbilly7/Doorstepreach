import React from 'react';

const Stepper = () => {
  return (
    <div className="container">
      <h1>Become a Stepper</h1>
      <p>
        Earn 15¢–20¢ per door delivered. Upload a photo to prove delivery, get
        badges, and build your rank. You choose when and where to work!
      </p>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li>📍 GPS-verified routes</li>
        <li>📷 Upload photos by each door</li>
        <li>📈 Earn status-based bonuses</li>
        <li>💸 Instant payouts (coming soon)</li>
      </ul>
      <button>Start Stepping</button>
    </div>
  );
};

export default Stepper;
