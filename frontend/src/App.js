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
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { postsReducer } from "./functions/reducers";

function App() {
  const { user } = useSelector((state) => ({ ...state }));
  const [visible, setVisible] = useState(false);
  const [{ loading, error, posts }, dispatch] = useReducer(postsReducer, {
    loading: false,
    posts: [],
    error: "",
  });
  useEffect(() => {
    getAllPosts();
  }, []);
  const getAllPosts = async () => {
    try {
      dispatch({
        type: "POSTS_REQUEST",
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getAllPosts`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch({
        type: "POSTS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "POSTS_ERROR",
        payload: error.response.data.message,
      });
    }
  };
  return (
    <div>
      {visible && <CreatePostPopup user={user} setVisible={setVisible} />}
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route
            path="/profile"
            element={<Profile setVisible={setVisible} />}
            exact
          />
          <Route
            path="/profile/:username"
            element={<Profile setVisible={setVisible} />}
            exact
          />
          <Route
            path="/"
            element={
              <Home setVisible={setVisible} posts={posts} loading={loading} />
            }
            exact
          />
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
