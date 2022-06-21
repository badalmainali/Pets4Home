import React, { useEffect } from "react";
import { Button, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../action/userAction";
import "./navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleLogout = () => {
    const interval = setInterval(() => {
      window.location.href = "/login";
    }, 1000);
    dispatch(logout());
    // window.location.reload()
  };

  return (
    <nav className="navbar navbar-expand-xl  ">
      <Link className="navbar-brand" to="/">
        <div className="col-md-12 text-center">
          <h3 className="animate-charcter"> PETS4HOME</h3>
        </div>
      </Link>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <i style={{ color: "white" }} className="fa fa-bars"></i>
        </span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-md-right"
        id="navbarNav"
      >
        <ul className="navbar-nav ml-auto mb-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home{" "}
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/appointment">
              Appointment
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart/*">
              <i className="fas fa-shopping-cart cartlogo"></i>
            </Link>
          </li>
          {userInfo ? (
            <NavDropdown menuVariant="dark" title={userInfo.name} id="username">
              <LinkContainer to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              {
                (userInfo.isAdmin === 'true' ? (
                  <LinkContainer to="/dashboard">
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                  </LinkContainer>
                ) : (
                  ""
                ))
              }

              <NavDropdown.Item onClick={handleLogout}>Logut</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <li className="nav-item">
              <Link
                className="btn btn-primary"
                style={{
                  backgroundColor: "rgb(0,123,255)",
                  borderRadius: "8px",
                }}
                to="/login"
              >
                SIGN IN
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
