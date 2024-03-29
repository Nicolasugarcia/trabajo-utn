import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Magic from "./pages/Magic";
import Disenios from "./pages/Disenios";
import CombosPage from "./pages/Combos";
import Contacto from "./pages/Contacto";
import Lugare from "./pages/Lugare";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Magic />} />
          <Route path='disenios' element={<Disenios />} />
          <Route path='combos' element={<CombosPage />} />
          <Route path='Lugare' element={<Lugare />} />
          <Route path='Contacto' element={<Contacto />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
