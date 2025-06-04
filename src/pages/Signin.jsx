import React from "react";

function Signin() {
  return (
    <>
      <h2>Sign in below:</h2>
      <br />
      <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default Signin;
