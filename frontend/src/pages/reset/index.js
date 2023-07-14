import "./style.css";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useState } from "react";
import { Form, Formik } from "formik";
import LoginInput from "../../components/inputs/loginInput";
import SearchAccount from "./SearchAccount";
import SendEmail from "./SendEmail";
import CodeVerification from "./CodeVerification";
import Footer from "../../components/login/Footer";
import ChangePassword from "./ChangePassword";
export default function Reset() {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(3);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [conf_password, setConf_password] = useState("");

  const [error, setError] = useState("");

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

      <div className="reset_wrap">
        {visible === 0 && (
          <SearchAccount email={email} setEmail={setEmail} error={error} />
        )}
        {visible === 1 && <SendEmail user={user} />}
        {visible === 2 && (
          <CodeVerification
            user={user}
            code={code}
            setCode={setCode}
            error={error}
          />
        )}
        {visible === 3 && <ChangePassword  
        password={password}
        conf_password={conf_password}
        setPassword={setPassword}
        setConf_password={setConf_password}
        />}
      </div>
      <Footer />
    </div>
  );
}
