import React from 'react';

const Checkout = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

      <div className="mb-4">
        <label className="block font-medium mb-1">Book Name</label>
        <input type="text" disabled value="Book Title" className="border rounded w-full px-3 py-2" />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Rental Duration (days)</label>
        <input type="number" placeholder="Enter days" className="border rounded w-full px-3 py-2" />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Payment Method</label>
        <select className="border rounded w-full px-3 py-2">
          <option>UPI</option>
          <option>Credit/Debit Card</option>
        </select>
      </div>

      <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Proceed to Pay
      </button>
    </div>
  );
};

export default Checkout;
