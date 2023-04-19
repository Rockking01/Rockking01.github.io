import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Landing from './Landing';
import Home from './pages/Home';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={
            <>
              <Landing />
            </>
          } />
      </Routes>
    </div>
  );
}

export default App;
