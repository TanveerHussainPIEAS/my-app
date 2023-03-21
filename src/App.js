import './App.css';
import Greet from './Componets/Greet';
import Welcome from './Componets/Welcome';
import Counter from './Componets/Counter';
import AppHeader from './Componets/Header';
import ParentComponent from './Componets/ParentComponent';
import NameListComponent from './Componets/NameListComponent'
import InLineStyleComponent from './Componets/InLineStyleComponent'
import FormComponent from './Componets/FormComponent'

function App() {
  return (
    <div className="App">
      <FormComponent></FormComponent>
      <AppHeader></AppHeader>
      <Greet name='Tanveer'></Greet>
      <Greet name='Ali'></Greet>
      <Welcome></Welcome>
      <Counter></Counter>
      <ParentComponent></ParentComponent>
      <NameListComponent></NameListComponent>
      <InLineStyleComponent></InLineStyleComponent>      
      <div className='extra-space'></div>
    </div>
  );
}

export default App;
