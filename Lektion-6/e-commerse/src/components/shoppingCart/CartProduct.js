import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, deleteProduct } from '../../store/actions/cartActions';

const CartProduct = ({item}) => {

  const dispatch = useDispatch();

  const add = e => {
    e.stopPropagation();
    dispatch(addToCart(item));
  }

  const remove = e => {
    e.stopPropagation();
    dispatch(removeFromCart(item));
  }

  const del = e => {
    e.stopPropagation();
    dispatch(deleteProduct(item._id))
  }

  return (
    <div>

      <div className="p-2 d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center">
          <img src={item.image} alt="product" className="img-fluid cart-image" />
          <div>
            <div><strong>{ item.name }</strong></div>
            <div><small>{ item.quantity } x { item.price } SEK</small></div>
          </div>
        </div>

        <div className="buttons">
          <button className="btn btn-sm btn-grey" onClick={remove}>-</button>
          <button className="btn btn-sm btn-grey" onClick={add}>+</button>
          <button className="btn btn-sm btn-danger" onClick={del}><i className="fas fa-trash"></i></button>
        </div>
      </div>



    </div>
  )
}

export default CartProduct
