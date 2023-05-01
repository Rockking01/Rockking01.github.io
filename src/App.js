import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import LoginView from "./pages/Login2";
import Landing from "./Landing";
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import ProfileView from "./pages/ProfileView";
import ChartData from "./pages/ChartData";


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chart_data" element={<ChartData />} />
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
