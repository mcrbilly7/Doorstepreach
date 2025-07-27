import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <input type="email" placeholder="you@example.com" />

        <label>Password</label>
        <input type="password" placeholder="••••••••" />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
