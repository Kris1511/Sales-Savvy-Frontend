import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

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

      if (msg === "User create successfully") {
        setTimeout(() => navigate("/Signin"), 1500);
      }
      setUsername("")
      setEmail("")
      setPassword("")
      setGender("")
      setDob("")
      setMobile("")
      setRole("")
      
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit data");
    }
  }

  return (
    <>
      <h2 className="signup-title">Sign up below:</h2>

<form className="signup-form" onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="username">Username:</label>
    <input
      type="text"
      id="username"
      name="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="password"
      name="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>

  <div className="form-group">
    <label>Gender:</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="other"
          checked={gender === "other"}
          onChange={(e) => setGender(e.target.value)}
        />
        Other
      </label>
    </div>
  </div>

  <div className="form-group">
    <label htmlFor="dob">Date of Birth:</label>
    <input
      type="date"
      id="dob"
      name="dob"
      value={dob}
      onChange={(e) => setDob(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="mobile">Mobile:</label>
    <input
      type="tel"
      id="mobile"
      name="mobile"
      value={mobile}
      onChange={(e) => setMobile(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label>Role:</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="role"
          value="admin"
          checked={role === "admin"}
          onChange={(e) => setRole(e.target.value)}
        />
        Admin
      </label>
      <label>
        <input
          type="radio"
          name="role"
          value="customer"
          checked={role === "customer"}
          onChange={(e) => setRole(e.target.value)}
        />
        Customer
      </label>
    </div>
  </div>

  <button type="submit" className="signup-btn">Sign Up</button>
</form>

<div className="form-footer">
  <Link to="/">← Go back</Link>
</div>

    </>
  );
}

export default Signup;
