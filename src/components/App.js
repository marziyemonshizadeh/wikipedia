import React from "react";
import { useRoutes } from "react-router-dom";

//style
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../sass/style";
import "./App.css";

//import components
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebarDesktop/sidebar";
import routes from "../routes";

function App() {
  let router = useRoutes(routes);
  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-2 col-md-3 col-xs-12 bg-sm-dark bg-light  vh-300">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9 col-xs-12 vh-300 mb-3 main">
          <Header />
          {router}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
