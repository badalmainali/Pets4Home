import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { GoogleLogout } from "react-google-login";
import UserSignUp from "./UserSignUp";
import GoogleButton from "react-google-button";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function SignUp() {
  // Hooks
  const [loginData, setLoginData] = useState(
    localStorage.getItem(
      "loginData" ? JSON.parse(localStorage.getItem("loginData")) : null
    )
  );
  // Use Effect
  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  // Google Logout
  const logout = () => {
    // localStorage.removeItem('loginData')
    localStorage.clear();
    setLoginData(null);
    window.location.href = "/";
  };

  // Handling Google Login Success
  const onSuccess = async (googleData) => {
    const res = await fetch("http://localhost:5000/api/google-login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));

    console.log("Login Success || current User:", googleData.profileObj);
  };
  // Handling Google Login Failure
  const onFailure = (res) => {
    console.log("Login Failed:", res);
  };

  return (
    <div className="bg-white ">
      {loginData ? (
        <div className="row justify-content-md-center">
          <div className="col-md-6 ">
            <h3>
              You logged in as {loginData.email}
              <p>
                <img
                  src={loginData.picture}
                  alt=""
                  style={{ height: 50, width: 50 }}
                />{" "}
              </p>
            </h3>

            <GoogleLogout
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={logout}
            ></GoogleLogout>
          </div>
        </div>
      ) : (
        <div className="row gx-0 justify-content-md-center">
          <div>
            <UserSignUp />
          </div>
          <div className="col-md-6  mb-5">
            <GoogleLogin
              render={(renderProps) => (
                <GoogleButton
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Log in with Google
                </GoogleButton>
              )}
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
