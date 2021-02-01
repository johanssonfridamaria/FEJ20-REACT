import React from 'react'

const OrderProduct = ({item}) => {
  return (
    <div className="p-2 d-flex justify-content-between align-items-center border">

        <div className="d-flex align-items-center">
          <img src={item.image} alt="product" className="img-fluid cart-image" />
          <strong>{ item.name }</strong>
        </div>
            <small>{ item.quantity } x { item.price } SEK</small>
        
      </div>
  )
}

export default OrderProduct
