import React from 'react'

function Add_to_cart({ product, onAddToCart }) {
  return (
    <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">₹{product.price}</p>
        <p className="product-desc">{product.description}</p>

        <button
          className="btn btn-primary btn-sm"
          onClick={() => onAddToCart(product)}
        >
          Add to cart
        </button>
      </div>
  )
}

export default Add_to_cart