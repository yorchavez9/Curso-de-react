import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import Eventos from './components/Eventos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="">Curso de React</h3>
      {/*  <Componente msg='Hola soy un componente principal'/>
        <hr/>
        <Propiedades cadena="Hola soy cadena de texto" numero={234} booleano = {true}/>
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/> */}
        {/* <hr/>
        <RenderizadoElementos/> */}
        <hr/>
        <Eventos/>
      </header>
    </div>
  );
}

export default App;

