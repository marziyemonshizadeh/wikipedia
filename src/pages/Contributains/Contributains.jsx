import React from "react";

import Links from "../../components/Links/links";
import Boxs from "../../components/boxs/boxStructure/boxs";

const Contributains = () => {
  return (
    <Boxs>
      <div className="d-flex justify-content-between border-bottom p-2 mb-2">
        <h2>User contributions for 188.211.83.53</h2>
        <div className="d-inline mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-question-circle-fill me-1"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
          </svg>
          <Links linkTxt="Help" />
        </div>
      </div>
      <div className="text-muted">
        For 188.211.83.53(
        <Links linkTxt=" talk " borderRght="true" urls="/wikipedia" />
        <Links linkTxt=" block log" borderRght="true" urls="/wikipedia" />
        <Links linkTxt=" logs" borderRght="true" urls="/wikipedia" />
        <Links linkTxt=" filter log" urls="/wikipedia" />)
      </div>

      <select
        className="form-select form-select-lg mb-3 mt-3"
        defaultValue={"DEFAULT"}
        aria-label=".form-select-lg example"
      >
        <option value={"DEFAULT"}>search for contributains</option>
        <option value="1">One</option>
        {/* defaultvalue */}
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <p>No changes wdefaultValueere found matching these criteria.</p>
      <Boxs>
        <div className="row mt-1">
          <div className="col-lg-1 col-md-3  col-sm-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="#EAECF0"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </div>
          <div className="col-lg-11 col-md-9  col-sm-12 mt-1">
            This is the contributions page for an IP user, identified by the
            user's IP address. Many IP addresses change periodically, and are
            often shared by several users. If you are an IP user, you may create
            an account or log in to avoid future confusion with other IP users.
            Registering also hides your IP address.
          </div>
        </div>
      </Boxs>
    </Boxs>
  );
};

export default Contributains;
