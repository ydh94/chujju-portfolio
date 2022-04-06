import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Cg from 'pages/Cg';
import Web from 'pages/Web';
import About from 'pages/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cg' element={<Cg />} />
        <Route path='/web' element={<Web />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
