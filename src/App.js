import logo from './logo.svg';
import './App.css';
import Greet from './Componets/Greet';
import Welcome from './Componets/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name='Tanveer'></Greet>
      <Greet name='Ali'></Greet>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
