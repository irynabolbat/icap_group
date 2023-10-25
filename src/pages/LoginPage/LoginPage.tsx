/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import "./LoginPage.scss";
import 'react-toastify/dist/ReactToastify.css';
import { singIn } from '../../components/api/loginServer';
import {login as loginAction} from "../../redux/authorizeSlice"


export const LoginPage = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!login) {
      setEmailError('Email is required');
      return;
    }

    if (login.trim().length < 8) {
      setEmailError('Login should have at least 8 symbols');
      return;
    }

    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    if (password.trim().length < 8) {
      setPasswordError("Password should have at least 8 symbols");
      return;
    }

    setEmailError('');
    setPasswordError('');

    try {
      await singIn({ username: login, password });
      dispatch(loginAction());
      navigate("/table");
    } catch (error) {
      toast.error('Account is not found');
    }
  }

  return (
    <>
      <div className="login_page">
        <div className="title_box">
          <div id="box1">L</div>
          <div id="box2">o</div>
          <div id="box3">g</div>
          <div id="box4">I</div>
          <div id="box5">n</div>
        </div>

        <form action="" method="POST" onSubmit={handleLogin} className="login_container">
          <div>
            <label className="input_label">
              E-mail:
            </label>
            <input
              type="text"
              value={login}
              className="input"
              placeholder="Your e-mail"
              onChange={(e) => setLogin(e.target.value)}
            />
            <div className="valid_error">{emailError}</div>
          </div>

          <div>
            <div className="password_details">
              <label className="input_label">Password:</label>
              <a 
                href="https://www.beckershospitalreview.com/cybersecurity/30-most-common-passwords-of-2023.html" 
                target="blank"
                className="forgot_password"
              >
                Forgot password?
              </a>
            </div>
            <input
              type={!isShow ? "password" : "text"}
              value={password}
              className="input"
              placeholder="Your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="valid_error">{passwordError}</div>
            <span 
              onClick={() => setIsShow(!isShow)}
              className="show_password"
            >
              {!isShow ? "Show password" : "Hide password"}
            </span>
          </div>

          <button 
            type="submit"
            className="login_btn"
          >
            Sign in
          </button>
        </form>
      </div>
    
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default LoginPage;
