import React, { useState } from "react";
import { Link } from "react-router-dom";

function Add_product() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [category, setCategory] = useState("");
  const [reviews, setReviews] = useState("");

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
      setReviews("");
    } catch (error) {
      console.log("Failed to add product");
    }
  };

  return (
    <div>
      <h3>Add New Product: </h3>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="price">price: </label>
        <input
          type="text"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="photo">Photo: </label>
        <input
          type="text"
          id="photo"
          name="photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="category">Category: </label>
        <input
          type="text"
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="reviews">Reviews: </label>
        <input
          type="text"
          id="reviews"
          name="reviews"
          value={reviews}
          onChange={(e) => setReviews(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Add Product</button>
      </form>
      <br />
      <br />
      <Link to="/product-management">Go back</Link>
    </div>
  );
}

export default Add_product;
