import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Magic from "./pages/Magic";
import Disenios from "./pages/Disenios";
import Combos from "./pages/Combos";
import Contacto from "./pages/Contacto";
import Lugare from "./pages/Lugare";




function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Magic />} />
          <Route path='disenios' element={<Disenios />} />
          <Route path='combos' element={<Combos />} />
          <Route path='Lugare' element={<Lugare />} />
          <Route path='Contacto' element={<Contacto />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
