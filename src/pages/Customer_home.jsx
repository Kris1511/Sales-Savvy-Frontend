import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCart from "../pages/component/ProductCart";

function Customer_home() {
  const [product, setProduct] = useState([]);

  // Fetch product on load
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/getAllProduct"
        );

        setProduct(response.data);
        console.log(response);
        
      } catch (err) {
        console.error("Error fetching assets", err);
      }
    };

    fetchProduct();
  }, []);

  const handleAddToCart = async () => {

    

  }

  return (
    <div>
      <h1>Customer Home: </h1>
       <h2 className="text-center mb-6">Available Products</h2>

          {product.map((p) => (

            <ProductCart 
            key={p.id}
            product = {p}
            onAddToCart = {handleAddToCart}
            />
            // <tr key={p.id}>
            //   <td>{p.id}</td>
            //   <td>{p.photo}</td>
            //   <td>{p.name}</td>
            //   <td>{p.description}</td>
            //   <td>{p.price}</td>
            //   <td>{p.category}</td>
            // </tr>
          ))}

    </div>
  );
}

export default Customer_home;
