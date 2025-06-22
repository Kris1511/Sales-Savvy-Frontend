import React from "react";
import { useLocation, Link } from "react-router-dom";

function Show_product() {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div>
      <h2>Product Details:</h2>
      {product ? (
        <div>
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
            <strong>Photo:</strong> {product.photo}
          </p>
          <p>
            <strong>Price:</strong> {product.price}
          </p>
        </div>
      ) : (
        <p>No product data available.</p>
      )}
      <br />
      <br />
      <Link to="/searchProduct">Go back</Link>
    </div>
  );
}

export default Show_product;
