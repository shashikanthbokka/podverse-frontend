import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function Post(userid, password, e) {
    e.preventDefault();
    e.stopPropagation();
    fetch("https://podverse.onrender.com/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userid,
        password: password,
      }),
    }).then((response) => {
      if (response.status === 200) {
        // navigate("/home");
      }
    });
  }
  return (
    <div>
      <div className="viewport">
        <div className="login-image">
          <div>
            <img src="images/logo-big.svg" />
          </div>
        </div>

        <div className="login-inputs">
          {/* <form> */}
          <div className="login-input">
            <label htmlfor="username"></label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username.."
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>
          <div className="login-input">
            <label htmlfor="password"></label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password.."
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <button
            className="login-btn"
            onClick={(e) => Post(username, password, e)}
          >
            Login
          </button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
