import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Activate from "./pages/home/activate";
import Login from "./pages/login";
import Profile from "./pages/profile";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import Reset from "./pages/reset";
import CreatePostPopup from "./components/createPostPopup";
import { useState } from "react";
function App() {
  const { user } = useSelector((state) => ({ ...state }));
  const [visible, setVisible] = useState(false);
  console.log(user);
  return (
    <div>
      {visible && <CreatePostPopup user={user} setVisible={setVisible} />}
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/" element={<Home setVisible={setVisible} />} exact />
          <Route path="/activate/:token" element={<Activate />} exact />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
        <Route path="reset" element={<Reset />} />
      </Routes>
    </div>
  );
}
export default App;
