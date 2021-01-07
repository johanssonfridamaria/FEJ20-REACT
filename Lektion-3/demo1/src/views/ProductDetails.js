import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import { useParams } from 'react-router-dom';

const ProductDetails = ({match}) => {

  const [product, setProduct] = useState({});

  const getProduct = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${match.params.id}`)

    console.log(res.data);
    setProduct(res.data);
  }

  useEffect(() => {
    getProduct()
  }, [])


  
  return (

    <div className="container">
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <div className="product-desc">
          <img src={product.image} alt=""/>
          <div className="product-info">
            <p>{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductDetails
