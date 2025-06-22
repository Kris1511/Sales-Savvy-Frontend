import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Delete_product() {

  const [id, setId] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      id
    }

    try {
      const resp = await fetch(`http://localhost:8080/deleteProduct/${id}`, {
        method : "DELETE"
      });

      const msg = await resp.text();
      alert(msg);
      
      setId('');
    } catch (error) {
      alert("There is something failed");
    }
  }

  return (
    <div>
      <h3>Delete Product: </h3>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="id">Id: </label>
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Delete Product</button>
      </form>
      <br />
      <br />
      <Link to="/product-management">Go back</Link>
    </div>
  )
}

export default Delete_product