import React, { useState } from "react";

function Signup() {


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [mobile, setMobile] = useState("");
    const [role, setRole] = useState("");

    async function handleSubmit(e) {

      e.preventDefault()

      const resp = await fetch("http://localhost:8080/signUp",
        {
          method : 'POST',
          body : JSON.stringify(
            { 
              'username' : username, 
              'email' : email,
              'password' : password,
              'gender' : gender,
              'dob' : dob,
              'mobile' : mobile,
              'role' : role
            })
        });
        const msg = await resp.text();
        console.log(msg);
    }


  return (
    <>
      <h2>Sign up below:</h2>

      <form onSubmit={handleSubmit}>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value={email} />
        <br />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" value={password} />
        <br />

        <label>Gender:</label>
        <div>
          <input type="radio" id="male" name="gender" value="male" />
          <label for="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" />
          <label for="female">Female</label>
          <input type="radio" id="other" name="gender" value="other" />
          <label for="other">Other</label>
        </div>
        <br />

        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" />
        <br />

        <label for="mobile">Mobile:</label>
        <input type="tel" id="mobile" name="mobile" />
        <br />

        <label for="role">Role:</label>
        Admin<input type="radio" name="role" value="admin" />
        Customer<input type="radio" name="role" value="customer" />
        <br />

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default Signup;
