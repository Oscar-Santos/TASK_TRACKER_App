import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Nav from './components/Nav';

function App() {
  const { user } = useAuthContext();

  return (
    <div className='app'>
     
      
        <Nav />
        <Routes>       
          <Route path='/about' element={<About/>} />
          <Route path='/home' element={user ? <Home/> : <Navigate to='/login'/>} />

          <Route path='/login' element={!user ? <Login /> : <Navigate to='/'/>} />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/'/>} />
        </Routes>
  
    </div>
  );
}

export default App;


