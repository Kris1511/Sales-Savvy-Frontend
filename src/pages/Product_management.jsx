import React from "react";
import { NavLink } from "react-router-dom";

function Product_management() {
  return (
    <>
      <div>Manage your product: </div>
      <br />
      <NavLink to="/addProduct">Add New Product</NavLink>
      <br />
      <br />
      <NavLink to="/updateProduct">Update Product</NavLink>
      <br />
      <br />
      <NavLink to="/searchProduct">Search Product</NavLink>
      <br />
      <br />
      <NavLink to="/deleteProduct">Delete Product</NavLink>
      <br />
      <br />
      <NavLink to="/getAllProduct">Get All Product</NavLink>
    </>
  );
}

export default Product_management;
