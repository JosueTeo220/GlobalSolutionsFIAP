import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/PaginaInicial';
import FaleConosco from './pages/Contato';
import Navbar from './components/Navbar';
import Conteudo from './components/Conteudo';
import Inseguranca from './pages/Inseguranca';
import Fatos from './pages/Fatos';
import AgriculturaSustentavel from './pages/AgriculturaSustentavel';


function App() {
  return (
   <div>
    <header></header>
    <section></section>
    <footer></footer>
    
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/faleconosco' element={<FaleConosco />}></Route>
        <Route path='/inseguranca' element={<Inseguranca />}></Route>
        <Route path='/fatos' element={<Fatos />}></Route>
        <Route path='/agricultura-sustentavel' element={<AgriculturaSustentavel />}></Route>
      </Routes>
    </Router>
  </div>
  );
}

export default App;