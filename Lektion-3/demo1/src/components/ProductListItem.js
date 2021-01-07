import React from 'react'
import { Link } from 'react-router-dom';

const ProductListItem = ({product}) => {
  return (
    <Link to={`/shop/${product.id}`} className="product-item">
      <img src={product.image} alt=""/>
      <h3>{product.title}</h3>
    </Link>
  )
}

export default ProductListItem
