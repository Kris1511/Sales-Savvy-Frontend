import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function OrderSummary() {
  const { orderId } = useParams();
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`http://localhost:8080/order/summary/${orderId}`);

        if (!r.ok) throw new Error("Unable to fetch order");
        const data = await r.json();
        if (data.error) throw new Error("Order not found");
        setData(data);
        console.log(data);
      } catch (e) {
        setErr(e.message);
      }
    })();
  }, [orderId]);

  if (err) return <p className="text-center mt-6 text-danger">{err}</p>;
  if (!data) return <p className="text-center mt-6">Loading…</p>;

  return (
    <div className="order-success">
      <h2 className="success-title">✅ Payment Successful!</h2>

      <p className="order-info">
        <b>Order ID:</b> {data.orderId}
      </p>
      <p className="order-info">
        <b>Status:</b> {data.status}
      </p>

      <h4 className="items-heading">🧾 Items</h4>

      <table className="items-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((it, idx) => (
            <tr key={idx}>
              <td>{it.name}</td>
              <td>{it.qty}</td>
              <td>₹{it.price}</td>
              <td>₹{it.qty * it.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="total-paid">Total Paid: ₹{data.total}</h3>

      <Link to="/customer_home" className="btn-continue">
        Continue Shopping 🛍️
      </Link>
    </div>
  );
}

export default OrderSummary;
