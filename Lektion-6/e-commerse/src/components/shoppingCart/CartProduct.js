import React from 'react'

const CartProduct = ({item}) => {
  return (
    <div>

      <div className="p-2 d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center">
          <img src="https://mdbootstrap.com/img/new/standard/city/042.jpg" alt="product" className="img-fluid cart-image" />
          <div>
            <div><strong></strong></div>
            <div><small>2 x 1299 SEK</small></div>
          </div>
        </div>

        <div className="buttons">
          <button className="btn btn-sm btn-grey">-</button>
          <button className="btn btn-sm btn-grey">+</button>
          <button className="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
        </div>
      </div>



    </div>
  )
}

export default CartProduct
