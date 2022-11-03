import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IngresoProductos from './components/IngresoProductos';
import ListarProductos from './components/ListarProductos';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Home" element={<Login/>}/>
            <Route path="/IngresoProductos" element={<IngresoProductos/>}/>            
            <Route path="/ListarProductos" element={<ListarProductos/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
