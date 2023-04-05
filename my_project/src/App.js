import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './Pages/Home'
import Content from './Pages/Content'
import SignUp from './Pages/SignUp'
import Error from './Pages/Error'

function App() {
  return (   
   <>
   {/* Navbar börjar här  */}
   <nav>
    <ul>
      <li> <Link to={'/'}>Hem</Link></li>
      <li> <Link to={'/Content'}>Innehåll</Link></li>
      <li> <Link to={'/SignUp'}>SignUp</Link></li>
    </ul>
   </nav>
    {/* React router börjar här  */}
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Content' element={<Content />} />
    <Route path='/SignUp' element={<SignUp />} />
    <Route path='*' element={<Error />} />
   </Routes>
   </>
   
  );
}

export default App;
