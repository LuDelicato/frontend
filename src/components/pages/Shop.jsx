import React, { useState } from 'react';
import ItemCards from './ItemCards';
import Products from './Products';


function Shop() {
  const [selectedCategoryID, setSelectedCategoryID] = useState(null);

  return (
    <div>
      <ItemCards setSelectedCategoryID={setSelectedCategoryID} />
      <Products selectedCategoryID={selectedCategoryID} />

    </div>
  );
}

export default Shop;
