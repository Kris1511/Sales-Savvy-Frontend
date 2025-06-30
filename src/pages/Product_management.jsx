import React from "react";
import { NavLink, Link } from "react-router-dom";

function Product_management() {
  return (
    <>
      <div className="product-mgmt-container">
      <h2 className="product-mgmt-title">📦 Manage Your Products</h2>

      <div className="product-mgmt-links">
        <NavLink to="/addProduct" className="product-mgmt-link">
          ➕ Add New Product
        </NavLink>
        <NavLink to="/updateProduct" className="product-mgmt-link">
          ✏️ Update Product
        </NavLink>
        <NavLink to="/searchProduct" className="product-mgmt-link">
          🔍 Search Product
        </NavLink>
        <NavLink to="/deleteProduct" className="product-mgmt-link">
          🗑️ Delete Product
        </NavLink>
        <NavLink to="/getAllProduct" className="product-mgmt-link">
          📃 View All Products
        </NavLink>
      </div>

      <div className="back-link">
        <Link to="/admin_home">← Go back</Link>
      </div>
    </div>
    </>
  );
}

export default Product_management;
