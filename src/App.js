import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import LoginView from "./pages/Login2";
import Landing from "./Landing";
import AdminPage from "./pages/AdminPage";
import ProfileView from "./pages/ProfileView";
import TokenEmail from "./pages/TokenEmail";


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/token_email" element={<TokenEmail />} />
        <Route path="/admin_page" element={<AdminPage />} />
        <Route path="/profile/:id" element={<ProfileView />} />
        <Route
          path="/"
          element={
            <>
              <Landing />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
