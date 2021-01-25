import React from 'react'

const Order = ({order}) => {
  return (
    <div>

      <div className="card p-3 my-4 shadow-2-strong">
        <div className="d-flex justify-content-between align-items-center">
          <h4>Order nr: {order.id}</h4>
          <h5>Number of products: {order.cart.length}</h5>
        </div>
      </div>

    </div>
  )
}

export default Order
