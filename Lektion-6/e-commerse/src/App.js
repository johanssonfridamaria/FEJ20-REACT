import './App.css';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home'
import Products from './views/Products'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
