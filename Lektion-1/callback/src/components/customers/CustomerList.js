import React from 'react'
import CustomerRow from './CustomerRow'

export default function CustomerList({customers, removeCustomerCallback}) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th className="col">#</th>
            <th className="col">Customer Name</th>
            <th className="col"></th>
          </tr>
        </thead>
        <tbody>

          {
            customers.map(customer => <CustomerRow customer={customer} key={customer.id} removeCustomerCallback={removeCustomerCallback} />)
          }

        </tbody>
      </table>
      
    </div>
  )
}
