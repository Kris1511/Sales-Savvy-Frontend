import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCart from "../pages/component/ProductCart";
import { useNavigate } from "react-router-dom";

function Customer_home() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // Fetch product on load
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getAllProduct");

      setProduct(response.data);
      // console.log(response);
    } catch (err) {
      console.error("Error fetching assets", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (product, qty = 1) => {
    const username = localStorage.getItem("username");
    if (!username) return alert("Please sign in first");

    try {
      const response = await fetch("http://localhost:8080/addToCart", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          productId: product.id,
          username,
          quantity: qty,
        }),
      });

      if (response.ok) {
        alert(`Added \ "${product.name}\" (x${qty}) to cart`);
      } else {
        alert("Could not add to cart");
      }
    } catch (error) {
      console.error(error);
      alert("Could not add to cart");
    }
  };

  // filter the product
  const filtered = product.filter((p) =>
    (p.name + p.description).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="customer-home">
      <header className="shop-header">
        <h1 className="shop-title">Welcome to Sales Savvy</h1>
        <p className="shop-tagline">
          Discover curated deals, fresh arrivals and lightning-fast delivery.
          Scroll down to start shopping!
        </p>

        <button
          className="btn btn-primary go-to-cart"
          onClick={() => navigate("/cart")}
        >
          Go to Cart 🛒
        </button>

        <input
          className="shop-search"
          type="text"
          placeholder="Search products…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <div className="container">
        {loading && <p className="text-center">Loading…</p>}
        {error && <p className="text-center text-danger">{error}</p>}

        {!loading &&
          !error &&
          (filtered.length ? (
            <div className="products-grid">
              {filtered.map((p) => (
                <ProductCart
                  key={p.id}
                  product={p}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <p className="text-center">No products available.</p>
          ))}
      </div>
    </section>
  );
}

export default Customer_home;
