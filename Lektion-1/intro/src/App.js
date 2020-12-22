import './App.css';
import Person from './components/Person'

function App() {

  const onClick = () => {
    console.log('yaay du tryckte på knappen!')
  }

  return (
    <div>
      <h1>Hello World!!!</h1>
      {/* <button onClick={onClick}>Tryck här</button> */}
      <Person name="Joakim" age="33" />
      <Person name="Jeanette" age="32"  />
      <Person name="Hans" age="55"  />
    </div>
  );
}

export default App;
