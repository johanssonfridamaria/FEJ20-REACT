import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneOrder, setOrder, updateOrder } from '../store/actions/ordersActions';
import { useParams } from 'react-router-dom';
import OrderProduct from '../components/orders/OrderProduct';

const AdminOrderDetails = () => {

  const dispatch = useDispatch();
  const id = useParams().id;

  useEffect(() => {
    dispatch(getOneOrder(id))
    return () => {
      dispatch(setOrder(null))
    }
  },[dispatch, id])

  const order = useSelector(state => state.ordersReducer.order)

 

  return (
    <div>
      <div className="text-center">
        <h1>Order nr: {order && order.id}</h1>
        <div className="d-flex justify-content-between">
        <p>status: {order && order.status}</p>
        <p>User id: {order && order.userId}</p>
        </div>
      </div>

    {
      order && order.cart.map(item => (
        <OrderProduct key={item._id} item={item} />
      ))
    }

      <div className="mt-5">
        <button className="btn btn-sm btn-danger me-3" onClick={() => {
          const _order = {
            ...order,
            status: 'Not Processed'
          }
          dispatch(updateOrder(_order, id))
        }}>Not Processed</button>
        <button className="btn btn-sm btn-info me-3" onClick={() => {
          const _order = {
            ...order,
            status: 'Packing'
          }
          dispatch(updateOrder(_order, id))
        }}>Packing</button>
        <button className="btn btn-sm btn-success" onClick={() => {
           const _order = {
            ...order,
            status: 'Shipped'
          }
          dispatch(updateOrder(_order, id))
        }}>Shipped</button>
      </div>


    </div>
  )
}

export default AdminOrderDetails