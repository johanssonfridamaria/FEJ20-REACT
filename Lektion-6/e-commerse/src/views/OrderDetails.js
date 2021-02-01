import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneOrder, setOrder } from '../store/actions/ordersActions';
import { useParams } from 'react-router-dom';
import OrderProduct from '../components/orders/OrderProduct';
import { chekoutCart } from '../store/actions/cartActions';

const OrderDetails = () => {

  const dispatch = useDispatch();
  const id = useParams().id;

  useEffect(() => {
    dispatch(getOneOrder(id))
    return () => {
      dispatch(setOrder(null))
    }
  },[dispatch, id])

  const order = useSelector(state => state.ordersReducer.order)

  const reOrder = () => {
    let _order = {
      shoppingCart: order.cart,
      totalCartAmount: order.sum
    }
    dispatch(chekoutCart(_order));
  }

  return (
    <div>
      <div className="text-center">
        <h1>Order nr: {order && order.id}</h1>
        <p>status: {order && order.status}</p>
      </div>

    {
      order && order.cart.map(item => (
        <OrderProduct key={item._id} item={item} />
      ))
    }

    <button className="btn btn-info mt-3" onClick={reOrder}>Re-Order</button>

    </div>
  )
}

export default OrderDetails
