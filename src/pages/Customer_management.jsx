import axios from "axios";
import React, { useEffect, useState } from "react";

function Customer_management() {
  const [customer, setCustomer] = useState([]);

  const [searchCustomer, setSearchCustomer] = useState("");

  const [editCustomer, setEditCustomer] = useState(null);

  useEffect(() => {
    fetchCustomer();
  }, []);

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

  const filterData = customer.filter((item) => 
    item.username.toLowerCase().includes(searchCustomer.toLocaleLowerCase())
  );

  const handleEditClick = (customer) => {
    setEditCustomer({ ...customer })
  }

  const handleUpdateChange = (e) => {
    setEditCustomer({ ...editCustomer, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/customers/updateCustomer/${editCustomer.id}`, editCustomer);
      alert("Customer updated successfully!");
      setEditCustomer(null); // close form
      fetchCustomer(); // refresh list
    } catch (error) {
      console.error("Error updating customer", error);
      alert("Update failed");
    }
  };

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
            <th>Actions</th>
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
              <td>
                <button onClick={() => handleEditClick(c)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editCustomer && (
        <div style={{ marginTop: "20px" }}>
          <h3>Edit Customer</h3>
          <form onSubmit={handleUpdateSubmit}>
            <input
              type="text"
              name="username"
              value={editCustomer.username}
              onChange={handleUpdateChange}
              placeholder="Username"
              required
            />
            <input
              type="email"
              name="email"
              value={editCustomer.email}
              onChange={handleUpdateChange}
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="mobile"
              value={editCustomer.mobile}
              onChange={handleUpdateChange}
              placeholder="Mobile"
              required
            />
            <button type="submit">Update</button>
            <button type="button" onClick={() => setEditCustomer(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Customer_management;
