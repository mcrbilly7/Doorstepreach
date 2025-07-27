import React from 'react';

const Signup = () => {
  return (
    <div className="container">
      <h1>Create Account</h1>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Nosson..." />

        <label>Email</label>
        <input type="email" placeholder="you@example.com" />

        <label>Password</label>
        <input type="password" placeholder="••••••••" />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
