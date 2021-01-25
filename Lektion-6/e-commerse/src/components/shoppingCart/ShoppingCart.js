import React from 'react';
import CartProduct from './CartProduct';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../store/actions/cartActions';

const ShoppingCart = () => {

  const dispatch = useDispatch();

  const clear = e => {
    e.stopPropagation();
    dispatch(clearCart());
  }

  const shoppingCart = useSelector(state => state.cartReducer.shoppingCart);
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);

  const empty = (
      <div className="p-2 d-flex justify-content-center align-items-center">
        Your cart is empty
      </div>
  )

  return (
    <div>
      
      {
        shoppingCart && shoppingCart.map(product => (
          <CartProduct key={product._id} item={product} />
        ))
      }

      {
        shoppingCart.length < 1 && empty
      }

      <div className="dropdown-divider"></div>

      <div className="p-2 d-flex justify-content-between align-items-center">
        <div>
          <div className="total-price">
            Total Amount: <span>{ totalCartAmount }</span>
          </div>
          <small className="text-muted">ink. vat</small>
        </div>
        <div>
          <button className="btn btn-info me-2" onClick={clear}>Clear</button>
          <button className="btn btn-info">Chekout</button>
        </div>
      </div>

    </div>
  )
}

export default ShoppingCart
