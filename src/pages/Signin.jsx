import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

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
        />
        <br />
        <br />
        <button type="submit">Sign In</button>
      </form>
      <br/>
      <br/>
      <Link to="/">Go back</Link>
    </>
  );
}

export default Signin;
