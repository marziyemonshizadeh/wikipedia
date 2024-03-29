import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout, useAuth } from "../../components/fire/firebase";

import Boxs from "../../components/boxs/boxStructure/boxs";

const Hero = () => {
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);
  let history = useNavigate();

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      history("/wikipedia");
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  return (
    <>
      <Boxs bg="bg-success">
        <div className="border-bottom p-2 fs-3">
          Welcome to Wikipedia :
          <span style={{ color: "#1e713f" }}>{currentUser?.email}</span>
        </div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-12 col-md-6 text-center">
              <p className="text-muted">
                To enter the main page, please click the button below
              </p>
              <button
                type="submit"
                className="btn w-25 bg-dark"
                disabled={loading || !currentUser}
                onClick={() => history("/wikipedia")}
              >
                Main page
              </button>
            </div>
            <div className="col-12 col-md-6 text-center">
              <p className="text-muted">
                To exit, please click the button below
              </p>
              <button
                type="submit"
                className="btn w-25 bg-dark"
                disabled={loading || !currentUser}
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </Boxs>
    </>
  );
};

export default Hero;
