import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <div className="card-text">
            <p>{product.short}</p>
              <p className="text-danger h5">{product.price} SEK</p>
            <button className="btn btn-info">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
