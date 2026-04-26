import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './cartSlice';
import './App.css';

const products = [
  { id: 1, name: 'Chocolate', price: 50 },
  { id: 2, name: 'DJI Osmo Pocket 4', price: 619 },
  { id: 3, name: 'Gaming Desktop Intel Core Ultra 7 265KF', price: 2299 },
];

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Tính tổng
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="app-container">
      <h1>🛒 Shopping Cart</h1>

      {/* Danh sách sản phẩm */}
      <div className="products-section">
        <h2>Dream list</h2>
        <div className="product-list">
          {products.map(prod => (
            <div key={prod.id} className="product-card">
              <h3>{prod.name}</h3>
              <p>${prod.price}</p>
              <button onClick={() => dispatch(addItem(prod))}>Build your dream</button>
            </div>
          ))}
        </div>
      </div>

      {/* Giỏ hàng */}
      <div className="cart-section">
        <h2>Your dream</h2>
        {cartItems.length === 0 ? (
          <p>Empty cart</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <span className="cart-name">{item.name}</span>
                <span className="cart-price">${item.price}</span>
                <div className="cart-quantity">
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                </div>
                <span className="cart-total">${item.price * item.quantity}</span>
                <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Tóm tắt */}
      <div className="summary-section">
        <h3>Summary</h3>
        <p>Total: {totalItems}</p>
        <p>Cost: ${totalPrice}</p>
      </div>
    </div>
  );
}

export default App;