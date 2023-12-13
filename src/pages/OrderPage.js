// OrderPage.js

import React, { useState } from 'react';
import ProductRow from '../components/ProductRow';

const OrderPage = () => {
  // Dummy data for products (replace this with your actual data)
  const products = [
    { company: 'AGYM', product: 'Spinning Cat Scratcher Ball', price: 52.99 },
    { company: 'Jasonwell', product: 'Foldable Dog Pool', price: 27.25 },
    { company: 'Expawlorer', product: 'Dog Fence Window', price: 30.50 },
    { company: 'Lollimeow', product: 'Capsule Pet Travel Backpack', price: 59.00 },
    { company: 'Drool\'d', product: 'Cat Hamster Wheel', price: 349.75 },
  ];

  return (
    <>
      <h2>Order Products</h2>

      <article>
        <p>Welcome to my product ordering page! Here, you can explore our list of products and place an order.</p>

        {/* Remove the form, user information, and delivery instructions */}
        
        <fieldset>
          <legend>Product Selection</legend>
          
          <table>
            <caption>Available Products</caption>
            <thead>
              <tr>
                <th>Company</th>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* Use map to render ProductRow for each product */}
              {products.map((product, index) => (
                <ProductRow key={index} product={product} />
              ))}
            </tbody>
          </table>

          {/* Help the user understand that they may only select one product */}
          <p>Select only one product from the list above.</p>
        </fieldset>
      </article>
    </>
  );
};

export default OrderPage;
