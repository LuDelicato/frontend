import React from 'react';
import Heading from './Heading';
import { products } from '../data/data';
import { ProductItems } from './ProductsItems';

function Products({ selectedCategoryID }) {
  const filteredProducts = selectedCategoryID
    ? products.filter((product) => product.categoryID === selectedCategoryID)
    : products;

  return (
    <section className='product'>
      <div className='container'>
        <Heading title='Todos os Produtos' desc='É preciso ter lata!' />
        <ProductItems items={filteredProducts} />
      </div>
    </section>
  );
}

export default Products;
