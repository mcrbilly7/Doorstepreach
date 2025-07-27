import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>404 — Page Not Found</h1>
      <p>Oops! That page doesn’t exist.</p>
      <Link to="/"><button>Back Home</button></Link>
    </div>
  );
};

export default NotFound;
