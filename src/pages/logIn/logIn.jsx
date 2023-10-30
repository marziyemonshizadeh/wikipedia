import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, useAuth } from "../../components/fire/firebase";

import Boxs from "../../components/boxs/boxStructure/boxs";

const Login = () => {
  const emailRef = useRef();
  const [emailError, setEmailError] = useState();
  const passwordRef = useRef();
  const [passwordError, setPasswordError] = useState();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  let history = useNavigate();

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };
  async function handleLogin() {
    setLoading(true);
    clearError();
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      history("/hero");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(error.message);
          break;
        case "auth/wrong-password":
          setPasswordError(error.code);
          break;
        default:
          break;
      }
    }
    setLoading(false);
  }
  return (
    <Boxs>
      <form>
        <h1 className="border-bottom">Log in</h1>
        <div className="d-flex flex-column align-items-center mt-5">
          <label className="mb-3 w-50">
            <span htmlFor="InputEmail" className="form-label">
              Email
            </span>
            <input
              type="email"
              required
              className="form-control"
              id="InputEmail"
              ref={emailRef}
              placeholder="Enter your Email"
            />
          </label>
          <p style={{ color: "red" }}>{emailError}</p>
          <label className="mb-3 w-50 ">
            <span htmlFor="exampleInputPassword1" className="form-label">
              Password
            </span>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password"
              ref={passwordRef}
            />
          </label>
          <p style={{ color: "red" }}>{passwordError}</p>
          <button
            type="submit"
            className="btn btn-primary col-6 mx-auto"
            disabled={loading || currentUser}
            onClick={handleLogin}
          >
            log in
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            fill="#EAECF0"
            className="bi bi-people-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path
              fillRule="evenodd"
              d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
            />
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
          </svg>

          <button
            type="submit"
            className="btn btn-secondary  col-6 mx-auto"
            onClick={() => history("/createaccount")}
          >
            join wikipedia
          </button>
        </div>
      </form>
    </Boxs>
  );
};

export default Login;
