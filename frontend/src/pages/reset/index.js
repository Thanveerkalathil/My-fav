import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
export default function Reset() {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    Cookies.set("user", "");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };
  return (
    <div className="reset">
      <div className="reset_header">
        <img
          src="https://res.cloudinary.com/dcqzgw55m/image/upload/v1672915497/My_fav_zz0a9j.svg"
          alt=""
        />
        {user ? (
          <div className="right_reset">
            <Link to="/profile">
              <img src={user.picture} alt="" />
            </Link>
            <button
              className="fav_button"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="right_reset">
            <button className="fav_button">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}
