import './App.css';
import { useState,} from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './Pages/Home'
import Content from './Pages/Content'
import SignUp from './Pages/SignUp'
import Error from './Pages/Error'
import FooterComponent from './Components/FooterComponent';
import Kontakt from './Pages/Kontakt'
import {SaleContext} from './Components/SaleContext';




function App() {
  // rea knappens procentvärde används med usestate och usecontext
 const [bonus, setBonus] = useState(0)
  return (   
   <>
   {/* Navbar börjar här  */}
   <nav>
    <ul>
      <li className='Logga'>Glasögon.se</li>
      <li> <Link to={'/'}>Hem</Link></li>
      <li> <Link to={'/Content'}>Utbud</Link></li>
      <li> <Link to={'/Kontakt'}>Kontakt</Link></li>
      <li> <Link to={'/SignUp'}>Bli medlem</Link></li>
    </ul>
   </nav>
    
    <SaleContext.Provider value={[bonus, setBonus]}>
    {/* React router börjar här  */}  
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Content' element={<Content />} />
    <Route path='/SignUp' element={<SignUp />} />
    <Route path='/Kontakt' element={<Kontakt/>}/>
    <Route path='*' element={<Error />} />
   </Routes>
   </SaleContext.Provider>
   <FooterComponent />

   </>
  );
}

export default App;
