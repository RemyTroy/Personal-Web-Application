// ProductRow.js

import React from 'react';
import ProductQuantity from './ProductQuantity';

const ProductRow = ({ product }) => {
  const { company, product: productName, price } = product;

  return (
    <tr>
      <td>{company}</td>
      <td>{productName}</td>
      <td>{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
      <td>
        {/* ProductQuantity component */}
        <ProductQuantity />
      </td>
    </tr>
  );
};

export default ProductRow;
