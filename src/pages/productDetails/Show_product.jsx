import React from "react";
import { useLocation, Link } from "react-router-dom";

function Show_product() {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div className="product-details-container">
      <h2 className="product-details-title">🛍️ Product Details:</h2>

      {product ? (
        <div className="product-details-card">
          <p>
            <strong>ID:</strong> {product.id}
          </p>
          <p>
            <strong>Name:</strong> {product.name}
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          
          <p>
            <strong>Price:</strong> ₹{product.price}
          </p>
          <p>
            <strong>Photo:</strong>{" "}
            <a href={product.photo} target="_blank" rel="noopener noreferrer">
                  {product.photo ? (
                    <img src={product.photo} alt={product.name} width="100" />
                  ) : (
                    "No Image"
                  )}
            </a>
          </p>
        </div>
      ) : (
        <p className="no-product-msg">No product data available.</p>
      )}

      <br />
      <Link to="/searchProduct" className="btn-back">
        🔙 Go back
      </Link>
    </div>
  );
}

export default Show_product;
