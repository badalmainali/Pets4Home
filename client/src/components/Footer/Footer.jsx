import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3 style={{ color: "white" }}>Services</h3>
              <ul>
                <li>
                  <Link to="#">E-Pets</Link>
                </li>
                <li>
                  <Link to="#">Home Deliveries</Link>
                </li>
                <li>
                  <Link to="#">E-ALinkpointments</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3 style={{ color: "white" }}>About</h3>
              <ul>
                <li>
                  <Link to="#">Company</Link>
                </li>
                <li>
                  <Link to="#">Team</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text ">
              <h3 style={{ color: "white" }}>Pets4Home</h3>
              <p>
                Pets4Home is a website that integrates e-commerce and
                e-veterinary to provide everything that is essential for your
                pets. The spike in the adoption and having the pets has
                increased the demand for the pets, pet food, pharmaceuticals,
                grooming supplies, and toys.
              </p>
            </div>
            <hr />
            <div className="col item social">
              <a to="#">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a to="#">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a to="#">
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a to="#">
                <i className="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <p className="copyright">Pets4Home © 2022</p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
