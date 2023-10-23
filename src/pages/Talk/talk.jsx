import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Links from "../../components/Links/links";
import Boxs from "../../components/boxs/boxStructure/boxs";

import Flower from "../../assets/Images/flower.jpg";

const Talk = () => {
  return (
    <Boxs>
      <h2 className="border-bottom p-2">
        User contributions for 188.211.83.53
      </h2>
      <div className="text-muted">From Wikipedia, the free encyclopedia</div>
      <div className="row mt-3">
        <div className="col-sm-12 col-lg-8">
          <h3>Welcome to this talk page</h3>
          <p>
            People on Wikipedia can use{" "}
            <Links urls="/talk" linkTxt="this talk page" /> to post a public
            message about edits made from the IP address you are currently
            using. Many IP addresses change periodically, and are often shared
            by several people. You may{" "}
            <Links urls="/createaccount" linkTxt="create an account" /> or{" "}
            <Links urls="/login" linkTxt="log in" /> to avoid future confusion
            with other <Links urls="/hero" linkTxt="logged out" /> users.
            Creating an account also hides your IP address.
          </p>
        </div>
        <div className="col-sm-12 col-lg-4 ">
          <LazyLoadImage src={Flower} alt="flower img" className="img-fluid" />
        </div>
      </div>
    </Boxs>
  );
};

export default Talk;
