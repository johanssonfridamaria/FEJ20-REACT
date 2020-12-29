import React, { Component } from 'react'
import AddProductForm from './components/AddProductForm'
import Product from './components/Product'

export default class App extends Component {

  constructor() { // första lifecycle hooken
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    const storedProducts = JSON.parse(localStorage.getItem('products'))
    if(storedProducts)
      this.setState({ products: storedProducts })
  }

  componentDidUpdate() {
    localStorage.setItem('products', JSON.stringify(this.state.products))
  }


  addProductCallback = product => {
    this.setState({ products: [...this.state.products, product] })
  }

  editProductCallback = product => {
    this.setState(prev => {
      let newProducts = prev.products.map(p => {
        if(p.id === product.id) {
          return p = product
        }
        return p
      })
      return {products: newProducts}
    })
  }

  render() { // Det här är den enda lifecycleln som vi MÅSTE ha
    return (
      <div>
        <AddProductForm addProductCallback={this.addProductCallback} />
        <br/>
        <br/>
        {
          this.state.products.map(product => {
            return <Product key={product.id} product={product} editProductCallback={this.editProductCallback} />
          })
        }
      </div>
    )
  }
}
