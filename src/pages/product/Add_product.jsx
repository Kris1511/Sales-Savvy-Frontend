import React, { useState } from "react";
import { Link } from "react-router-dom";

function Add_product() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [category, setCategory] = useState("");
  // const [reviews, setReviews] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      description,
      price,
      photo,
      category,
    };

    try {
      const resp = await fetch("http://localhost:8080/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const msg = await resp.text();
      alert(msg);

      setName("");
      setDescription("");
      setPrice("");
      setPhoto("");
      setCategory("");
      // setReviews("");
    } catch (error) {
      console.log("Failed to add product");
    }
  };

  return (
    <div className="add-product-container">
      <h2 className="form-title">📦 Add New Product</h2>

      <form className="product-form" onSubmit={handleSubmit}>
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
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
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
          Add Product
        </button>
      </form>

      <div className="back-link">
        <Link to="/product-management">← Go back</Link>
      </div>
    </div>
  );
}

export default Add_product;
