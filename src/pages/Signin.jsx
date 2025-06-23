import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

      if (msg === "admin") {
        setTimeout(() => navigate("/admin_home"), 1500); // Redirect to admin home
      } else if (msg === "customer") {
        navigate("/customer_home"); // Redirect to customer home
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
      <h2>Sign in below:</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <label for="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <br />

        <label for="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Sign In</button>
      </form>
      <br />
      <br />
      <Link to="/">Go back</Link>
    </>
  );
}

export default Signin;
