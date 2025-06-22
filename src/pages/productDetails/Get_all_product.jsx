import React, { useEffect, useState } from "react";

function Get_all_product() {
  const [data, setData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    async function getAllProduct() {
      try {
        const response = await fetch("http://localhost:8080/getAllProduct", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const products = await response.json();

        setData(products);
      } catch (error) {
        console.log("Failed to get all product", error);
      }
    }

    getAllProduct();
  }, []);

  // Filtered results based on searchTerm
  const filterData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  // pagination
  const totalPages = Math.ceil(filterData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filterData.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Products:</h2>

      <input
        type="text"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "300px" }}
      />

      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Product name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Photo</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.description}</td>
              <td>{value.category}</td>
              <td>
                {value.photo ? (
                  <img src={value.photo} alt={value.name} width="80" />
                ) : (
                  "No Image"
                )}
              </td>
              <td>{value.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ⬅ Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            style={{
              margin: "0 5px",
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}

export default Get_all_product;
