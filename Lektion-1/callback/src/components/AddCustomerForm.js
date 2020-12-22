import React, { useRef } from 'react'

export default function AddCustomerForm({ addCustomerCallback }) {

  const customerName = useRef()

  function addCustomer(e) {
    e.preventDefault()

    // console.log(customerName.current.value)
    const name = customerName.current.value
    if(name === '')
      return

    addCustomerCallback(name);
    customerName.current.value = '';
  }

  return (
    <form onSubmit={addCustomer} className="container my-5 py-5">
      <div className="input-group mb-3">
        <input ref={customerName} type="text" className="form-control" placeholder="Ange kundens namn" aria-label="Ange kundens namn" aria-describedby="basic-addon2" />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">LÄGG TILL</button>
        </div>
      </div>
      
    </form>
  )
}
