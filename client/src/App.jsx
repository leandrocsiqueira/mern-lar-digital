import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topo from './components/Topo';
import Entrar from './pages/Entrar';
import Inicio from './pages/Inicio';
import Perfil from './pages/Perfil';
import Registrar from './pages/Registrar';
import Sobre from './pages/Sobre';

export default function App() {
  return (
    <BrowserRouter>
      <Topo />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}
