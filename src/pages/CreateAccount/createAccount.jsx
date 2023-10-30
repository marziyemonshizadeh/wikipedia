import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup, useAuth } from "../../components/fire/firebase";

import Boxs from "../../components/boxs/boxStructure/boxs";

const CreateAccount = () => {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const [emailError, setEmailError] = useState();

  const passwordRef = useRef();
  const [passwordError, setPasswordError] = useState();

  let history = useNavigate();
  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  async function handleSignup() {
    setLoading(true);
    clearError();
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      history("/hero");
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message);
          break;
        case "auth/weak-password":
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
      <h1 className="border-bottom p-2">Create Account</h1>
      <div className="row">
        <form className="col-md-6 col-xs-12 text-center">
          <label className="mb-3 w-75">
            <span htmlFor="InputEmail" className="form-label float-start">
              Email
            </span>
            <input
              type="email"
              className="form-control"
              id="InputEmail"
              ref={emailRef}
              placeholder="Enter your Email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text float-start">
              Consider using a username other than your real name, as usernames
              are public and cannot be made private later.
            </div>
            <p style={{ color: "red" }} className="float-start">
              {emailError}
            </p>
          </label>

          <label className="mb-3 w-75">
            <span htmlFor="InputPassword1" className="form-label float-start">
              Password
            </span>
            <input
              type="password"
              className="form-control"
              id="InputPassword1"
              ref={passwordRef}
              placeholder="Enter your password"
            />
            <div id="userNameHelp" className="form-text float-start">
              It is recommended to use a unique password that you are not using
              on any other website.
            </div>
            <p style={{ color: "red" }} className="float-start">
              {passwordError}
            </p>
          </label>

          <button
            type="submit"
            disabled={loading || currentUser}
            className="btn btn-primary w-75 mb-4"
            onClick={handleSignup}
          >
            create account
          </button>
        </form>
        <div className="col-md-6 col-xs-12 text-center">
          <h3>
            <strong>Wikipedia is made by people like you.</strong>
          </h3>
          <div className="container">
            <div className="row row-cols-2">
              <div className="col mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="#EAECF0"
                  className="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
              </div>
              <div className="col text-center mt-3 fs-5">
                <p className="my-0 mb-3">
                  <b>1,106,978,421</b>
                </p>
                <p>edits</p>
              </div>
              <div className="col mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="#EAECF0"
                  className="bi bi-files"
                  viewBox="0 0 16 16"
                >
                  <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                </svg>
              </div>
              <div className="col text-center mt-3 fs-5">
                <p className="my-0 mb-3">
                  <b>6,553,651</b>
                </p>
                <p>articles</p>
              </div>
              <div className="col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
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
              </div>
              <div className="col text-center mt-3 fs-5">
                <p className="my-0 mb-3">
                  <b> 120,587</b>
                </p>
                <p>recent contributors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Boxs>
  );
};

export default CreateAccount;
