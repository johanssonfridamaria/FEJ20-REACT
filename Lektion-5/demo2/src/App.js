import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

    </BrowserRouter>
  );
}

export default App;
