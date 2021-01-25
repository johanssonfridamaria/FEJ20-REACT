import './App.css';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home'
import Products from './views/Products'
import Orders from './views/Orders';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/orders" component={Orders} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
