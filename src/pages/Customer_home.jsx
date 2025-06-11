import React, { useEffect, useState } from "react";
import axios from "axios";

function Customer_home() {
  const [product, setProduct] = useState([]);

  // Fetch product on load
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/getAllProducts"
        );

        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching assets", err);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      <h2>Customer Home: </h2>

      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Photos</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {product.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.photo}</td>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{p.price}</td>
              <td>{p.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customer_home;
