import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import loadRazorpay from "../Utils/LoadRzp";

function AddToCart() {
  const [items, setItems] = useState([]);
  const [loading, setLoad] = useState(true);
  const [error, setErr] = useState("");

  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) return;
    (async () => {
      try {
        const res = await fetch(`http://localhost:8080/getCart/${username}`);
        if (!res.ok) throw new Error("Failed to fetch cart");

        const data = await res.json();
        console.log("Cart items:", data);

        setItems(data);
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoad(false);
      }
    })();
  }, [username]);

  const total = items.reduce((s, it) => s + it.product.price * it.quantity, 0);

  // payment handler
    async function payNow() {
    if (!items.length) return;

    // 1) load Razorpay SDK
    const ok = await loadRazorpay();
    if (!ok) return alert("Razorpay SDK failed to load. Check your internet.");

    // 2) ask backend to create order
    const res = await fetch("http://localhost:8080/payment/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, amount: total * 100 }) // paise
    });
    if (!res.ok) return alert(await res.text());
    const data = await res.json(); // { key, orderId, amount }

    // 3) open Razorpay checkout
    const rzp = new window.Razorpay({
      key:        data.key,
      amount:     data.amount,
      currency:   "INR",
      name:       "Sales Savvy",
      description:"Order Payment",
      order_id:   data.orderId,
      handler: async (resp) => {
        /* 4) verify payment */
        const vr = await fetch("http://localhost:8080/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            orderId:   resp.razorpay_order_id,
            paymentId: resp.razorpay_payment_id,
            signature: resp.razorpay_signature
          })
        });
        if (!vr.ok) return alert(await vr.text());
        const orderId = await vr.text(); // we returned orderId
        navigate(`/order-summary/${orderId}`);
      },
      prefill: {
        name:  username,
        email: localStorage.getItem("email") || "",
      },
      theme: { color: "#3399cc" },
    });
    rzp.open();
  }
  

  return (
    <div className="container cart-view">
      <h2 className="text-center">🛒 Your Cart</h2>

      {loading && <p className="text-center">Loading…</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {!loading && !error && items.length === 0 && (
        <p className="text-center">Your cart is empty.</p>
      )}

      {!loading && !error && (
  <>
    {items.length > 0 ? (
      <>
        <div className="products-grid">
          {items.map((p) => (
            <div key={p.product.id} className="product-card">
              <img
                src={p.product.photo || "/placeholder.png"}
                alt={p.product.name}
                loading="lazy"
                onError={(e) => (e.target.src = "/placeholder.png")}
              />
              <h4>{p.product.name}</h4>
              <p>{p.product.description}</p>
              <p>{p.product.category}</p>
              <p>Quantity: {p.quantity}</p>
              <p>Price: ₹{p.product.price}</p>
              <p>Subtotal: ₹{p.quantity * p.product.price}</p>
            </div>
          ))}
        </div>

        <article className="cart-summary mt-4">
          <h3>Total: ₹{items.reduce((s, it) => s + it.product.price * it.quantity, 0)}</h3>
          <button className="btn btn-primary" onClick={payNow}>
            Pay with Razorpay
          </button>
        </article>
      </>
    ) : (
      <p className="text-center">No products available.</p>
    )}
    <br />
      <br />
      <Link to="/customer_home">Go back</Link>
  </>
)}

    </div>
  );
}

export default AddToCart;
