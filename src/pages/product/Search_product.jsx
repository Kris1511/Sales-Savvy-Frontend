import React, { useState } from "react";
import Show_product from "../productDetails/Show_product";
import { useNavigate } from "react-router-dom";

function Search_product() {
  const [searchId, setSearchId] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/searchProduct?id=${encodeURIComponent(
          searchId
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Product not found");
      }

      const product = await response.json(); // backend should return JSON

      console.log("Product found:", product);

      // Navigate to Show_product page with product data using state (optional)
      navigate("/showproduct", { state: { product } });

    } catch (error) {
      console.error("Error from backend:", error);
      alert("Product not found or server error");
    }
  };

  return (
    <>
      <h2>Search Product: </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchId">Search Product Name:</label>
        <input
          type="text"
          id="searchId"
          name="searchID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Search Product</button>
      </form>
    </>
  );
}

export default Search_product;
