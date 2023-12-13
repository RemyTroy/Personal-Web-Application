// ProductQuantity.js

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const ProductQuantity = () => {
  // State for quantity
  const [quantity, setQuantity] = useState(0);

  // Function to increase quantity
  const increaser = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrease quantity
  const decreaser = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      {/* Icon to increase */}
      <FaPlus onClick={increaser} />

      {/* Icon to decrease */}
      <FaMinus onClick={decreaser} />

      {/* Updated quantity */}
      {quantity}
    </div>
  );
};

export default ProductQuantity;
