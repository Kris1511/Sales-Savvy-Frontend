import React, { useState } from "react";
import { Link } from "react-router-dom";

function Delete_product() {
  const [id, setId] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch(`http://localhost:8080/deleteProduct/${id}`, {
        method: "DELETE",
      });

      const msg = await resp.text();
      alert(msg);

      setId("");
    } catch (error) {
      alert("There is something failed");
    }
  };

  return (
    <div className="delete-product-container">
      <h3 className="form-title">🗑️ Delete Product</h3>

      <form className="delete-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">Product ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>

        <button className="submit-btn danger-btn" type="submit">
          Delete Product
        </button>
      </form>

      <div className="back-link">
        <Link to="/product-management">← Go back</Link>
      </div>
    </div>
  );
}

export default Delete_product;
