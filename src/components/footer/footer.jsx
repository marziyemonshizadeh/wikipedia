import React from "react";
import Links from "../Links/links";

const Footer = () => {
  let lang = [
    "Privacy policy",
    "About Wikipedia",
    "Disclaimers",
    "Contact Wikipedia",
    "Mobile view",
    "Developers",
    "Statistics",
    "Cookie statement",
    "Edit preview settings",
  ];
  return (
    <div className="bg-light py-4">
      <ul className="list-inline text-center me-lg-5 ms-md-5">
        {lang.map((i, index) => {
          return (
            <li className="list-inline-item me-lg-3" key={index}>
              <Links linkTxt={i} disBlock="true" urls="/wikipedia" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
