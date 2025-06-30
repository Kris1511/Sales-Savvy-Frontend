import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Style/root.css';
import '../Style/layout.css';
import '../Style/component.css';

function Signin() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    try {
      const resp = await fetch("http://localhost:8080/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const msg = await resp.text();
      alert(msg);

      if (msg === "admin" || msg === "customer") {
        localStorage.setItem("username", username); // Username is already known from input
        navigate(`/${msg}_home`);
      } else {
        alert(msg + " logged in"); // Show error message for invalid credentials
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit data");
    }
  }

  return (
    <>
      <div className="signin-page">
      <div className="form-card">
        <h2 className="form-title">Sign in below</h2>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>

        <Link to="/" className="back-link">← Go back</Link>
      </div>
    </div>
    </>
  );
}

export default Signin;
