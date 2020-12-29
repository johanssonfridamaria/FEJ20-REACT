import React from 'react'
import { useRef } from 'react'

const AddProductForm = ({ addProductCallback }) => {

  const productName = useRef();
  const productDesc = useRef();

  const onSub = (e) => {
    e.preventDefault();

    if(productName.current.value === '')
      return

    addProductCallback({
      id: Date.now().toString(),
      name: productName.current.value,
      desc: productDesc.current.value
    })

    productName.current.value = null
    productDesc.current.value = null
  }

  return (
    <form onSubmit={onSub}>
      <input type="text" ref={productName} />
      <input type="text" ref={productDesc} />
      <button>Lägg till</button>
    </form>
  )
}

export default AddProductForm
