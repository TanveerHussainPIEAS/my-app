import logo from './logo.svg';
import './App.css';
import Greet from './Componets/Greet';
import Welcome from './Componets/Welcome';
import Counter from './Componets/Counter';
import AppHeader from './Componets/Header';
import ParentComponent from './Componets/ParentComponent';

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Greet name='Tanveer'></Greet>
      <Greet name='Ali'></Greet>
      <Welcome></Welcome>
      <Counter></Counter>
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
