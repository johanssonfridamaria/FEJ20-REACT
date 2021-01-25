import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Order from '../components/orders/Order';
import { getOrders } from '../store/actions/ordersActions';

const Orders = () => {

  const dispatch = useDispatch();
  const orders = useSelector(state => state.ordersReducer.orders);

  useEffect(() => {
    dispatch(getOrders());
  },[dispatch])

  return (
    <div>
      <h1>Orders</h1>

      {
        orders && orders.map(order => (
          <Order key={order.id} order={order} />
        ))
      }
    </div>
  )
}

export default Orders
