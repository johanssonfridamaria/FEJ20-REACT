import './App.css';
import { useState, useEffect } from 'react'
import AddProductForm from './components/AddProductForm';
import Product from './components/Product';

function App() {
  // STATE
  const [products, setProducts] = useState([])

  // LIFECYCLES
  // componentDidMount
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'))
    if(storedProducts)
      setProducts(storedProducts);
  }, [])

  // componentDidUpdate + exkludering
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  // FUNCTIONS
  const addProductCallback = product => {
    setProducts([...products, product])
  }

  const editProductCallback = product => {
    setProducts(prev => {
      return prev.map(p => {
        if(p.id === product.id) {
          return p = product
        }
        return p
      })
    })
  }

  return (
    <div>
      <AddProductForm addProductCallback={addProductCallback} />
      <br/>
      <br/>
      {
        products.map(product => (
          <Product key={product.id} product={product} editProductCallback={editProductCallback} />
        ))
      }
    </div>
  );
}

export default App;
