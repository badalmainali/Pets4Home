import React, { useState, useEffect } from "react";
import { register } from "../../action/userAction";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import AOS from 'aos';
import './Signup.css';

import 'aos/dist/aos.css'; 
// ..
AOS.init();


const UserSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  // USing REdux State
  const dispatch = useDispatch()
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/", { replace: true });
    }
  }, [navigate, userInfo]);

  // Submitting FOrm
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      // DISPATCH REGISTER
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className="container bg" >
      <h3 className="mt-3 heading" style={{ textAlign: "center" }}>USER - REGISTRATION</h3>
      <hr />

      <div className="row justify-content-md-center mt-5 register">
        <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"  data-aos-duration="1500" className="col-md-5 reg-left">
          <br />


          <form className="mx-1 mx-md-4 forms" onSubmit={handleSubmit}>
            {/* <h1>Create Account</h1> */}

            <div class="group">
              <input type="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name} required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Full Name</label>
            </div>

            <div class="group">
              <input type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email} required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
            </div>

            <div class="group">
              <input type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Password</label>
            </div>

            <div class="group">
              <input type="password"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword} required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Confirm Password</label>
            </div>

          {/* for message and error showing */}
            {message && <Message>{message}</Message>}
            {loading && <Loader></Loader>}
            {error && <Message>{error}</Message>}


            <div className="d-flex justify-content-center mx-4 mb-3 mb-sm-4">
              <button data-aos="flip-left"  data-aos-duration="2500"
                type="submit"
                className="btn btn-primary btn-md btn-block mt-4"
              >
                Register
              </button>
              <br />
              {/*  Google Login */}
            </div>
            <h4 style={{ textAlign: "center" }}>Or</h4>
            <p style={{ textAlign: "center" }}>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
        <div className="col-md-5 reg-right" data-aos="fade-down"
     data-aos-anchor-placement="bottom-bottom"  data-aos-duration="1500">
          <figure>
            <img
              src="/images/registerimg.webp"
              style={{ height: "350px" }}
              alt=""
              srcSet=""
              className="reg-img"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
