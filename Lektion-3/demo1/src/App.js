import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home';
import About from './views/About';
import Shop from './views/Shop';
import ProductDetails from './views/ProductDetails';
import NotFound from './views/NotFound';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/shop" exact component={Shop} />

        <Route path="/shop/:id" exact component={ProductDetails} />

        <Route path="*" component={NotFound} />

      </Switch>

    </Router>
  );
}

export default App;
