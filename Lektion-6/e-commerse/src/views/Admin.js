import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminOrder from '../components/admin/AdminOrder';
import { getAllOrders } from '../store/actions/ordersActions';

const Admin = () => {

  const dispatch = useDispatch();
  const orders = useSelector(state => state.ordersReducer.orders);

  useEffect(() => {
    dispatch(getAllOrders());
  },[dispatch])

  return (
    <div>
      <h1>Orders</h1>

      {
        orders && orders.map(order => (
          <AdminOrder key={order.id} order={order} />
        ))
      }
    </div>
  )
}

export default Admin
