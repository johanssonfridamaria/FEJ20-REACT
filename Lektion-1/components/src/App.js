import './App.css';
import Form from './components/Form';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Navbar />
      <Jumbotron />
      <Form />
    </div>
  );
}

export default App;
