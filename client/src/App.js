import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Documentation from './pages/Documentation';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Nav from './components/Nav';

function App() {
  return (
    <div className='app'>
     
      
        <Nav />
        <Routes>       
          <Route path='/about' element={<About />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/documentation' element={<Documentation />} />

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
  
    </div>
  );
}

export default App;


