import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../action/userAction";
import { useEffect } from "react";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import './Login.css';
import loginImg from '../../images/login/profile.png';
import loginImage from '../../images/login/login.png';

import AOS from 'aos';


import 'aos/dist/aos.css';
// ..
AOS.init();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect, { replace: true });
    }
  }, [navigate, userInfo, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="container logins justify-content-center">


      {/* ------------------------------------- */}
      <div className="row justify-content-md-center login-form">



        <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="2400"
          data-aos-easing="ease-in-sine" className="col-md-3 login-left bubble">
          <img
            src={loginImage}
            style={{ height: "490px", marginTop: "2%", marginBottom: "2%" }}
            alt=""
            srcSet=""
            className="log-imgs"
          />
        </div>

        <div data-aos="fade-up-left" data-aos-duration="2400" className="col-md-7 login-right bubble">

          <img
            src={loginImg}
            style={{ height: "65px", marginTop: "2%", marginBottom: "2%" }}
            alt=""
            srcSet=""
            className="log-img"
          />

          <h1 data-aos="zoom-in" style={{ textAlign: "center" }}>Hey! Welcome</h1>

          <form
            className="mx-1 mx-md-4 mt-4 justify-content-md-center"
            onSubmit={handleSubmit}
          >

            <div className="groups lgn-inpt">
              <input type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="inpt"
                required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
            </div>


            <div className="groups lgn-inpt">
              <input type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="inpt"
                required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Password</label>
            </div>

            {loading && <Loader></Loader>}
            {error && <Message variant="danger">{error}</Message>}


            <div className="d-flex col md-4 align-items-center justify-content-center ">
              <button
                type="submit"
                className="btn btn-primary btn-md btn-block"
                style={{ width: "237px", marginBottom: "3%", marginLeft: "0.5rem" }}
              >
                Login
              </button>
            </div>
            <p style={{ textAlign: "center", marginLeft: "0.4rem" }}>
              Not registered yet ? <Link to="/register"> Register</Link>
            </p>


          </form>

        </div>

      </div>
    </div>
  );
}

export default Login;
