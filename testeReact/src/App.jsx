/* eslint-disable no-unused-vars */
//External é bom para estilos globais
//Modules é bom para components com mais estilizações
//Inline é bom para componentes menores com pouco estilo

import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import UndertalePage from './views/Undertale/UndertalePage';
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom';

function App() {
 
  return(
    <>
    <div className="App">
    <Navbar> </Navbar>
      <div className='container' style={{ marginTop: '100px' }}>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App
