import logo from './logo.svg';
import './App.css';
import {PokimonApp} from './components/PokimonApp'
import { PokimonList } from './components/PokimonList';
import { PokimonEdit } from './components/PokemonEdit';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<PokimonList/>}/>
    <Route path='/pokimon-app' element={<PokimonApp/>}/>
    <Route path='/pokimon-edit/:id' element={<PokimonEdit/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
