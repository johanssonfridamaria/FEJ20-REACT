import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AddCustomerForm from './components/AddCustomerForm';
import CustomerList from './components/customers/CustomerList';
import Navbar from './components/navigation/Navbar';

function App() {

  const [title] = useState('Customer List')
  const [customers, setCustomers] = useState([
    { id: '11jkjkj234kj4', name: 'Joakim' },
    { id: '11jkjkjsdfw34', name: 'Jeanette' }
  ])

  function addCustomerCallback(customerName) {
    setCustomers(oldCustomers => {
      return [...oldCustomers, { id: uuidv4(), name: customerName }]
    })
  }

  function removeCustomerCallback(id) {
    const oldCustomers = [...customers]
    setCustomers(oldCustomers.filter(customer => customer.id !== id))
  }

  return (
    <div className="App">
      <Navbar title={title}/>
      <AddCustomerForm addCustomerCallback={addCustomerCallback} />
      <CustomerList customers={customers} removeCustomerCallback={removeCustomerCallback} />
    </div>
  );
}

export default App;
