import React from 'react'
import { Link } from 'react-router-dom';

const Order = ({order}) => {

  let quantity = 0;
  order && order.cart.forEach(product => {
    quantity += product.quantity
  })

  return (
    <Link to={`/orders/${order.id}`}>

      <div className="card p-3 my-4 shadow-2-strong text-dark">
        <div className="d-flex justify-content-between align-items-center">
          <h4>Order nr: {order.id}</h4>
          <h4>Price: {order.sum}</h4>
          <p>Status: {order.status}</p>
          <h5>Number of products: {quantity}</h5>
        </div>
      </div>

    </Link>
  )
}

export default Order
