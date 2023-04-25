import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Landing from './Landing';
import Home from './pages/Home';
import Admin_Page from './pages/Admin_Page';
import Login_Admin from './pages/Login_Admin';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin_page" element={<Admin_Page />} />
        <Route path="/login_admin" element={<Login_Admin />} />
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
