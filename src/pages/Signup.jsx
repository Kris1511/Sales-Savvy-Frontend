import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      username,
      email,
      password,
      gender,
      dob,
      mobile,
      role,
    };

    try {
      const resp = await fetch("http://localhost:8080/signUp", {
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
      <h2>Sign up below:</h2>

      <form onSubmit={handleSubmit}>
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <label>Gender:</label>
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="female">Female</label>
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="other">Other</label>
        </div>
        <br /><br />
        <label for="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br /><br />
        <label for="mobile">Mobile:</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br /><br />
        <label for="role">Role:</label>
        Admin
        <input
          type="radio"
          name="role"
          value="admin"
          checked={role === "admin"}
          onChange={(e) => setRole(e.target.value)}
        />
        Customer
        <input
          type="radio"
          name="role"
          value="customer"
          checked={role === "customer"}
          onChange={(e) => setRole(e.target.value)}
        />
        <br /><br />
        <button type="submit">Sign Up</button>
      </form>
      <br/>
      <br/>
      <Link to="/">Go back</Link>
    </>
  );
}

export default Signup;
