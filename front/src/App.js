import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IngresoProductos from './components/IngresoProductos';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<IngresoProductos/>}/>
            {/*<Route path="/Home" element={<Home/>}/>
  <Route path="/producto/:id" element={<ProductDetails/>}/>*/}
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
