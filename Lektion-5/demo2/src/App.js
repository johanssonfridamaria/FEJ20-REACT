import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ProtectedRoute } from './routes/ProtectedRoute';
import Navbar from './components/Navbar';
import News from './views/News';
import Create from './views/Create';
import Login from './views/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/" component={News} />
          <ProtectedRoute exact path="/create" component={Create} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
