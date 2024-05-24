/* eslint-disable no-unused-vars */
//External é bom para estilos globais
//Modules é bom para components com mais estilizações
//Inline é bom para componentes menores com pouco estilo


import Students from './components/Students/Students';
import Button from './Button'
import UserGreeting from './components/UserGreeting/UserGreeting';
import Navbar from './components/Navbar/Navbar';
import UndertalePage from './views/Undertale/UndertalePage';

function App() {
 
  return(
    
    <>
      <Navbar></Navbar>
      <div className='container' style={{ marginTop: '100px' }}>
        <UndertalePage />
      </div>
    </>
  );
}

export default App
