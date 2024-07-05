import React, { useState } from 'react';
import './PurchaseEntry.css';

const PurchaseEntry = () => {
  const [userId, setUserId] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [bookId, setBookId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [status, setStatus] = useState('PENDING');
  const [orderDetails, setOrderDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      userId,
      orderNumber,
      purchaseDate,
      bookId,
      quantity,
      status
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();
      setOrderDetails(result);
      alert('Order submitted successfully!');
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to submit order.');
    }
  };

  return (
    <div className="app-container">
      <h2>Purchase Entry</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Order Number:</label>
          <input
            type="text"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Purchase Date:</label>
          <input
            type="date"
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Book ID:</label>
          <input
            type="text"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Order</button>
      </form>
      {orderDetails && (
        <div className="order-details">
          <h3>Order Details</h3>
          <p>Order Number: {orderDetails.orderNumber}</p>
          <p>User ID: {orderDetails.userId}</p>
          <p>Purchase Date: {orderDetails.purchaseDate}</p>
          <p>Book ID: {orderDetails.bookId}</p>
          <p>Quantity: {orderDetails.quantity}</p>
          <p>Status: {orderDetails.status}</p>
        </div>
      )}
    </div>
  );
};

export default PurchaseEntry;