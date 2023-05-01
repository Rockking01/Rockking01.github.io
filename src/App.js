import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import LoginView from "./pages/Login2";
import Landing from "./Landing";
import Home from "./pages/Home";
import Admin_Page from "./pages/Admin_Page";
import Profile_View from "./pages/Profile_View";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin_page" element={<Admin_Page />} />
        <Route path="/profile/:id" element={<Profile_View />} />
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
