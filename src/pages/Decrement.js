import React, { useState } from "react";
import products from "./Products";
import { Link } from "react-router-dom";

const ShoppingList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddToCart = (item) => {
    const newItem = {
      ...item,
      quantity: 1,
    };
    setSelectedProduct(newItem);
    setQuantity(1);
    const updatedCartItems = [...cartItems, newItem];
    setCartItems(updatedCartItems);
  };

  const handleRemoveFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    setSelectedProduct(null);
    setQuantity(0);
  };

  const handleClearCart = () => {
    setSelectedProduct(null);
    setQuantity(0);
    setCartItems([]);
  };

  const handleBuyNow = () => {
   
    setCartItems([]);
    setSelectedProduct(null);
    setQuantity(0);
  };

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
    setSelectedProduct({
      ...selectedProduct,
      quantity: quantity + 1,
    });
  };

  const handleDecrementQuantity = () => {
    if (quantity === 1) {
      handleRemoveFromCart(selectedProduct.id);
    } else {
      setQuantity(quantity - 1);
      setSelectedProduct({
        ...selectedProduct,
        quantity: quantity - 1,
      });
    }
  };

 
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {filteredProducts.map((props) => (
              <div className="col-md-4 mb-4" key={props.id}>
               
                  <div className="card-body">
                    <h5 className="card-title">{props.date}</h5>
                    <p className="card-text">RS: {props.price}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <div className="input-group mb-3 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Search Products"
              aria-label="Search Products"
              aria-describedby="search-button"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="search-button"
            >
              Search
            </button>
          </div>

          <div className="card">
            <div className="card-header">Shopping Cart</div>
            {selectedProduct && (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{selectedProduct.name}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={handleDecrementQuantity}
                        >
                          -
                        </button>
                        <span className="mx-2">{quantity}</span>
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={handleIncrementQuantity}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{selectedProduct.price * quantity}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleRemoveFromCart(selectedProduct.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
            {cartItems.length > 0 && (
              <div className="card-body">
                <p>Total items: {cartItems.length}</p>
                <p>
                  Total price:{" "}
                  {cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}
                </p>
                <button
                  className="btn btn-success w-100"
                  onClick={handleBuyNow}
                >
                 <Link to="/login" className="linnk" style={{textDecoration:'none',color:'white'}}> Buy Now</Link>
                </button>
                <button
                  className="btn btn-danger w-100 mt-2"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
              </div>
            )}
            {cartItems.length === 0 && (
              <div className="card-body">Your cart is empty</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Decrement;
 
import React from 'react'

 function Decrement() {
  return (
    <div>

    </div>
  )
}
export default Decrement