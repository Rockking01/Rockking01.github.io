import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import LoginView from "./pages/Login2";
import Landing from "./Landing";
import AdminPage from "./pages/AdminPage";
import ProfileView from "./pages/ProfileView";
import TokenEmail from "./pages/TokenEmail";
import { useState, useEffect } from "react";
import Protected from './components/Protected';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Comprueba si existe un token en localStorage
    const token = localStorage.getItem("token");

    // Si hay un token, establece isLoggedIn en true
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (token) => {
    // Almacenar token en localStorage
    localStorage.setItem("token", token);
    // Establecer el estado isLoggedIn en true
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Eliminar token de localStorage
    localStorage.removeItem("token");
    // Establecer el estado isLoggedIn en false
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginView onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/token_email" element={
        <Protected isLoggedIn={isLoggedIn}>
          <TokenEmail onLogout={handleLogout} />
        </Protected>
      } />
      <Route path="/admin_page" element={
        <Protected isLoggedIn={isLoggedIn}>
          <AdminPage onLogout={handleLogout} />
        </Protected>
      } />
      <Route path="/profile/:id" element={
        <Protected isLoggedIn={isLoggedIn}>
          <ProfileView onLogout={handleLogout} />
        </Protected>
      } />
      <Route
        path="/"
        element={
          <>
            <Landing />
          </>
        }
      />
    </Routes>
  );
}

export default App;

