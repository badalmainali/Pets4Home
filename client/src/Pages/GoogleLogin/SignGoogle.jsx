import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import GoogleButton from "react-google-button";
import axios from "axios";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const SignGoogle = () => {
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
  // Handling Google Login Success
  const onSuccess = async (googleData) => {
    const res = await axios("http://localhost:5000/api/google-login", {
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
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        // buttonText="Login with Google"
        render={(renderProps) => (
          <GoogleButton
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Log in with Google
          </GoogleButton>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default SignGoogle;
