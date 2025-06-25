import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

function Customer_management() {
  const [customer, setCustomer] = useState([]);

  const [searchCustomer, setSearchCustomer] = useState("");

  const [editCustomer, setEditCustomer] = useState(null);

  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const customersPerPage = 10;

  useEffect(() => {
    fetchCustomer();
  }, []);

  const fetchCustomer = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:8080/customers/getAllCustomer"
      );

      setCustomer(response.data);

      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching customer", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (customer) => {
    setEditCustomer({ ...customer });
  };

  const handleUpdateChange = (e) => {
    setEditCustomer({ ...editCustomer, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/customers/updateCustomer/${editCustomer.id}`,
        editCustomer
      );
      alert("Customer updated successfully!");
      setEditCustomer(null); // close form
      fetchCustomer(); // refresh list
    } catch (error) {
      console.error("Error updating customer", error);
      alert("Update failed");
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/customers/deleteCustomer/${id}`,
        {
          method: "DELETE",
        }
      );

      const msg = await response.text();
      alert(msg);

      fetchCustomer();
    } catch (error) {
      alert("There is something failed");
    }
  };

  const filteredCustomers = customer.filter(
    (item) =>
      item.username &&
      item.username.toLowerCase().includes(searchCustomer.toLowerCase())
  );

  const indexOfLast = currentPage * customersPerPage;
  const indexOfFirst = indexOfLast - customersPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);

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
        {loading ? (
          <TailSpin height="50" width="50" color="blue" />
        ) : (
          <tbody>
            {currentCustomers.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.username}</td>
                <td>{c.email}</td>
                <td>{c.mobile}</td>
                <td>{c.role}</td>
                <td>
                  <button onClick={() => handleEditClick(c)}>Edit</button>
                  <button onClick={() => handleDeleteClick(c.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {editCustomer && (
        <div style={{ marginTop: "20px" }}>
          <h3>Edit Customer:</h3>
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

      <br />
      <br />
      <Link to="/admin_home">Go back</Link>
    </div>
  );
}

export default Customer_management;
