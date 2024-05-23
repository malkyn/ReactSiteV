/* eslint-disable no-unused-vars */
//External é bom para estilos globais
//Modules é bom para components com mais estilizações
//Inline é bom para componentes menores com pouco estilo


import Students from './components/Students/Students';
import Button from './Button'
function App() {
 
  return(
    <>
      <Students name="SpongeBob" age={30}isStudent={true}></Students>
      <Students name="Patrick" age={42}isStudent={false}></Students>
      <Students name="Squidward" age={50}isStudent={false}></Students>
      <Students name="Sandy" age={27}isStudent={true}></Students>
      <Students></Students>
    </>
  );
}

export default App
