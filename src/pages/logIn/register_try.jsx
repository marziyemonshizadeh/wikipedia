import React, { useState } from "react";

export default function Register() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    let userInfo = {
      email,
      password,
    };
    fetch("https://wikipedia-dc023-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify(userInfo),
    })
      .then((response) => console.log(response))
      .catch((err) => console.log("erroe =", err));
  };
  return (
    <>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">register</h4>
        <form className="needs-validation" noValidate="" onSubmit={handleClick}>
          <div className="row g-3">
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email <span className="text-body-secondary">(Optional)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <label className="mb-3 w-50 ">
              <span htmlFor="exampleInputPassword1" className="form-label">
                Password
              </span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your password"
              />
            </label>
          </div>

          <button className="w-100 btn btn-primary btn-lg" type="submit">
            sign up
          </button>
        </form>
      </div>
    </>
  );
}
