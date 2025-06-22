import React, { useState } from "react";
import { Link } from "react-router-dom";

function Update_product() {

  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [photo, setPhoto] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async(e) => {
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
  }


  return (
    <div>
      <h2>Update product: </h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id: </label>
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={(e) => setID(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="name">Product Name: </label>
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
        <label htmlFor="price">Price: </label>
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
        <button type="submit">Update Product</button>
      </form>
      <br />
      <br />
      <Link to="/product-management">Go back</Link>
    </div>
  );
}

export default Update_product;
