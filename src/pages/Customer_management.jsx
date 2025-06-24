import axios from "axios";
import React, { useEffect, useState } from "react";

function Customer_management() {
  const [customer, setCustomer] = useState([]);

  const [searchCustomer, setSearchCustomer] = useState("");

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/customers/getAllCustomer"
        );

        setCustomer(response.data);

        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching customer", error);
      }
    };

    fetchCustomer();
  }, []);

  const filterData = customer.filter((item) => 
    item.username.toLowerCase().includes(searchCustomer.toLocaleLowerCase())
  )

  return (
    <div>
      <h2>Customer details:</h2>

      <input
        type="text"
        placeholder="Search by customer name"
        value={searchCustomer}
        onChange={(e) => setSearchCustomer(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "300px" }}
      />

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.username}</td>
              <td>{c.email}</td>
              <td>{c.mobile}</td>
              <td>{c.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customer_management;
