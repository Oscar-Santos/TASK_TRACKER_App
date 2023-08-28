import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      
      <div className='pages'>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
