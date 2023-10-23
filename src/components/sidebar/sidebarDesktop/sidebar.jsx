import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Links from "../../../components/Links/links";
import SidebarMobileNav from "../sidebarMobile/sidebarMobileNav";
// import SidebarMobileNavbar from '../sidebarMobileNavbar/sidebarMobileNavbar'
import logo from "../../../assets/Images/sidebarLogo/sidebarDesktopLogo.png";
import "../sidebarDesktop/sidebar.css";
class Sidebar extends Component {
  state = {
    listOne: [
      { txt: "Main page", url: "/wikipedia" },
      { txt: "Contents", url: "/contents" },
      { txt: "Current event", url: "/nearby" },
      { txt: "Random article", url: "/contents" },
      { txt: "About Wikipedi", url: "/aboutWikipedia" },
      { txt: "Contact us", url: "/contactus" },
      { txt: "Donate", url: "/donate" },
      // { txt: "register", url: "/register" },
      // { txt: "log", url: "/log" },
    ],
    listTwo: [
      "Help",
      "Learn to edit",
      "Community porta",
      "Recent change",
      "Upload file",
    ],
    listThree: [
      "What links here",
      "Related changes",
      "Community porta",
      "Recent change",
      "Upload file",
    ],
    listFour: ["Download as PDF", "Printable version"],
    listFive: [
      "Wikipedia Commons",
      "MediaWiki",
      "Meta-Wiki",
      "Multilingual Wikisource",
      "Wikispecies",
      "Wikibook",
      "Wikidat",
      "Wikimania",
      "WikispeWikinews",
      "Wikiquot",
      "Wikisource",
      "Wikiversity",
      "Wikivoyage",
      "Wikitionary",
    ],
    languages: [
      "العربية",
      "বাংলা",
      "Български",
      "Bosanski",
      "Català",
      "Čeština",
      "Deutsch",
      "Eesti",
      "Ελληνικά",
      "Español",
      "Esperanto",
      "Euskara",
      "فارسی",
      "Français",
      "Galego",
      "한국어",
      "Hrvatski",
      "Italiano",
      "עברית",
      "ქართული",
      "Latviešu",
      "Lietuvių",
      "Magyar",
      "Македонски",
      "Bahasa Melayu",
      "Nederlands",
      "日本語",
      "Norsk bokmål",
      "Norsk nynorsk",
      "Polski",
      "Português",
      "Română",
      "Русский",
      "Simple English",
      "Slovenčina",
      "Slovenščina",
      "Српски / srpski",
      "Srpskohrvatski / српскохрватски",
      "Suomi",
      "Svenska",
      "ไทย",
      "Türkçe",
      "Українська",
      "Tiếng Việt",
      "中文",
    ],
  };
  render() {
    let headerStyle = "text-muted border-bottom mt-2";
    //  const handleMouseOver = (event)=>{
    //    event.target.style.fill = '#54595D';
    //   }
    // const handleMouseOut = (event)=>{
    //     event.target.style.fill=''
    //   }
    //add fill:gray in svg
    return (
      <>
        <div className="d-lg-block d-md-block d-none ps-lg-3">
          <LazyLoadImage src={logo} alt="wikipediaLogo" className="ps-2 mb-4" />
          <div className="ps-3">
            {this.state.listOne.map((i, index) => {
              return (
                <Links
                  linkTxt={i.txt}
                  key={index}
                  disBlock="true"
                  urls={i.url}
                />
              );
            })}

            <div className={headerStyle}>Contribute</div>

            {this.state.listTwo.map((i, index) => {
              return (
                <Links
                  linkTxt={i}
                  key={index}
                  disBlock="true"
                  urls="/wikipedia"
                />
              );
            })}

            <div className={headerStyle}>Tools</div>
            {this.state.listThree.map((i, index) => {
              return (
                <Links
                  linkTxt={i}
                  key={index}
                  disBlock="true"
                  urls="/wikipedia"
                />
              );
            })}

            <div className={headerStyle}>Print/export</div>
            {this.state.listFour.map((i, index) => {
              return (
                <Links
                  linkTxt={i}
                  key={index}
                  disBlock="true"
                  urls="/wikipedia"
                />
              );
            })}

            <div className={headerStyle}>In other projects</div>
            {this.state.listFive.map((i, index) => {
              return (
                <Links
                  linkTxt={i}
                  key={index}
                  disBlock="true"
                  urls="/wikipedia"
                />
              );
            })}

            <div className="d-flex justify-content-between border-bottom mt-2">
              <div className="text-muted">languages</div>
              <svg
                // onMouseOver={handleMouseOver}
                // onMouseOut={handleMouseOut}
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-gear-fill mt-1 sidebarSvg"
                viewBox="0 0 16 16"
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
            </div>

            <div className="d-lg-block d-md-none  d-sm-none">
              {this.state.languages.map((i, index) => {
                return (
                  <Links
                    linkTxt={i}
                    key={index}
                    disBlock="true"
                    urls="/wikipedia"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <SidebarMobileNav />
      </>
    );
  }
}

export default Sidebar;
