import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './Pages/Home'
import Content from './Pages/Content'
import SignUp from './Pages/SignUp'
import Error from './Pages/Error'
import FooterComponent from './Components/FooterComponent';
import Kontakt from './Pages/Kontakt'
import {SomeContext} from '../src/Components/SomeContext';


function App() {
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
    
    <SomeContext.Provider value={"Fiskar"}>
    {/* React router börjar här  */}  
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Content' element={<Content />} />
    <Route path='/SignUp' element={<SignUp />} />
    <Route path='/Kontakt' element={<Kontakt/>}/>
    <Route path='*' element={<Error />} />
   </Routes>
   </SomeContext.Provider>
   <FooterComponent />

   </>
  );
}

export default App;
