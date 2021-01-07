import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ProductListItem from '../components/ProductListItem';

const Shop = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    const products = res.data;

    // console.log(products);
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div className="shop">
      {
        products.map(product => (
          <ProductListItem key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default Shop
