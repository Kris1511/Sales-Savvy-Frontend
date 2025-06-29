import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        const r = await fetch(`http://localhost:8080/getCart/${username}`);
        if (!r.ok) throw new Error("Failed to fetch cart");

        const data = await r.json();
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

  async function payNow() {}

  return (
    <div className="container cart-view">
      <h2 className="text-center">🛒 Your Cart</h2>

      {loading && <p className="text-center">Loading…</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {!loading && !error && items.length === 0 && (
        <p className="text-center">Your cart is empty.</p>
      )}

      {!loading && !error && items.length > 0 && (
        <>
          {/* table same as before (omitted to save space) */}
          <article className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <button className="btn btn-primary" onClick={payNow}>
              Pay with Razorpay
            </button>
          </article>
        </>
      )}
    </div>
  );
}

export default AddToCart;
