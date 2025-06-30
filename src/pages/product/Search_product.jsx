import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
      <div className="search-product-container">
      <h2 className="form-title">🔍 Search Product</h2>

      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="searchId">Product Name:</label>
          <input
            type="text"
            id="searchId"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Search Product
        </button>
      </form>

      <div className="back-link">
        <Link to="/product-management">← Go back</Link>
      </div>
    </div>
    </>
  );
}

export default Search_product;
