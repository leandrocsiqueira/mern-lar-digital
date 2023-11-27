import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Entrar from './pages/Entrar';
import Registrar from './pages/Registrar';
import Sobre from './pages/sobre';
import Perfil from './pages/Perfil';

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Inicio /> } />
      <Route path="/entrar" element={ <Entrar /> } />
      <Route path="/registrar" element={ <Registrar /> } />
      <Route path="/sobre" element={ <Sobre /> } />
      <Route path="/perfil" element={ <Perfil /> } />
    </Routes>
  </BrowserRouter>
}
