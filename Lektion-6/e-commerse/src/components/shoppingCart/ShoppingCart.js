import React from 'react'
import CartProduct from './CartProduct'

const ShoppingCart = () => {


  const empty = (
      <div className="p-2 d-flex justify-content-center align-items-center">
        Your cart is empty
      </div>
  )

  return (
    <div>
      
      <CartProduct />

      <div className="dropdown-divider"></div>

      <div className="p-2 d-flex justify-content-between align-items-center">
        <div>
          <div className="total-price">
            Total Amount: <span>0</span>
          </div>
          <small className="text-muted">ink. vat</small>
        </div>
        <button className="btn btn-info">Chekout</button>
      </div>

    </div>
  )
}

export default ShoppingCart
