import React from 'react'

export default function CustomerRow({customer, removeCustomerCallback}) {

  function removeCustomer() {
    removeCustomerCallback(customer.id)
  }

  return (
    <tr>
      <th scope="row">{customer.id}</th>
      <td>{ customer.name }</td>
      <td>
        <button onClick={removeCustomer} className="btn btn-danger btn-sm">TA BORT</button>
      </td>
    </tr>
  )
}
