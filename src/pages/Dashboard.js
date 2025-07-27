import React from 'react';

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div style={{ display: 'grid', gap: '1rem' }}>
        <div style={{ background: '#1f2937', padding: '1rem', borderRadius: '0.5rem' }}>
          <h2>Active Deliveries</h2>
          <p>2 in progress</p>
        </div>
        <div style={{ background: '#1f2937', padding: '1rem', borderRadius: '0.5rem' }}>
          <h2>Total Earned</h2>
          <p>$1,782.45</p>
        </div>
        <div style={{ background: '#1f2937', padding: '1rem', borderRadius: '0.5rem' }}>
          <h2>Badges</h2>
          <p>⭐ Verified Stepper • 🏆 Pro-Level Earner</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
