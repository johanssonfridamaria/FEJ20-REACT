import './App.css';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home'
import Products from './views/Products'
import Orders from './views/Orders';
import OrderDetails from './views/OrderDetails';
import Login from './views/Login';
import Register from './views/Register';
import { UserRoute } from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <UserRoute exact path="/orders" component={Orders} />
          <UserRoute exact path="/orders/:id" component={OrderDetails} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
