import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/loginInput";
import * as Yup from "yup";
import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios";
import api from "../../confiq.js";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const loginInfos = {
  email: "",
  password: "",
};
export default function LoginForm({ setVisible }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };
  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required.")
      .email("Must be a valid email")
      .max(100),
    password: Yup.string().required("Password is required."),
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loginSubmit = async () => {
    try {
      const response = await api.post(`/login`, {
        email,
        password,
      });
      
      if (response && response.data) {
        dispatch({ type: "LOGIN", payload: response.data });
        Cookies.set("user", JSON.stringify(response.data));
        navigate("/");
      } 
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || "An error occurred during login.");
    }
  };
  

  return (
    <div className="login_wrap">
      <div className="login_1">
        <img
          src="../../icons/myfav.svg"
          alt=""
        />
        <span>
          My#fav helps you connect and share with the people in your life.
        </span>
      </div>
      <div className="login_2">
        <div className="login_2_wrap">
          <Formik
            enableReinitialize
            initialValues={{
              email,
              password,
            }}
            validationSchema={loginValidation}
            onSubmit={() => {
              loginSubmit();
            }}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  placeholder="Email address or Phone number"
                  onChange={handleLoginChange}
                />
                <LoginInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleLoginChange}
                  bottom
                />
                <button type="submit" className="fav_button">
                  Log In
                </button>
              </Form>
            )}
          </Formik>

          <Link to="/reset" className="forgot_password">
            Forgotten Paassword?
          </Link>
          {error && <div className="error_text">{error}</div>}
          <div className="sign-splitter"></div>
          <button
            className="fav_button open_signup"
            onClick={() => setVisible(true)}
          >
            Create Account
          </button>
        </div>
        <Link to="/" className="sign_extra">
          <b>Create a page </b>
          for a celebrity, brand or business.
        </Link>
      </div>
    </div>
  );
}
