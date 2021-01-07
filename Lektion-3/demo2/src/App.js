import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './views/Home';
import Admin from './views/Admin';
import Login from './views/Login';
import { ProtectedRoute } from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Navbar title="Protected Routes" />

      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />

          <ProtectedRoute path="/admin" exact component={Admin} />

          <Route path="/login" exact component={Login} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
