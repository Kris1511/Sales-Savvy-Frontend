import React, { useState } from "react";
import { Link } from "react-router-dom";

function Update_product() {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      id,
      name,
      description,
      price,
      photo,
      category,
    };

    try {
      const response = await fetch("http://localhost:8080/updateProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const msg = await response.text();
      alert(msg);

      setID("");
      setName("");
      setDescription("");
      setPrice("");
      setPhoto("");
      setCategory("");
    } catch (error) {
      console.log("Failed to update product");
    }
  };

  return (
    <div className="update-product-container">
      <h2 className="form-title">✏️ Update Product</h2>

      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">Product ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setID(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="photo">Photo URL:</label>
          <input
            type="text"
            id="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <button className="submit-btn" type="submit">
          Update Product
        </button>
      </form>

      <div className="back-link">
        <Link to="/product-management">← Go back</Link>
      </div>
    </div>
  );
}

export default Update_product;
