import React, { useEffect, useState } from 'react'

function Get_all_product() {

  const [data, setData] = useState([]);

 useEffect(() => {
    async function getAllProduct() {
      try {
        const response = await fetch("http://localhost:8080/getAllProduct", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const products = await response.json(); // Expecting JSON response
        console.log(products);
        setData(products);
      } catch (error) {
        console.log("Failed to get all product", error);
      }
    }

    getAllProduct();
  }, []);

  return (
    <div>
      {data.map((value) => (
        <div key={value.id}>
          <h3>{value.id}</h3>
          <h2>{value.name}</h2>
          <h2>{value.description}</h2>
          <h2>{value.category}</h2>
          <h2>{value.photo}</h2>
          <h2>{value.price}</h2>

        </div>
      ))}
    </div>
  )
}

export default Get_all_product