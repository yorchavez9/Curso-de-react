import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/ClicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';



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
        {/* <hr/>
        <EventosES6/>
        <hr/>
        <EventosES7/>
        <hr/>
        <MasSobreEventos/>
        <hr/>
        <Padre/>
        <hr/>
        <CicloVida/> */}
       {/*  <AjaxApis/> */}
       <ContadorHooks/>
      </header>
    </div>
  );
}

export default App;

