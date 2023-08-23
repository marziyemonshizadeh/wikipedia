import React, { Component } from "react";
import Links from "../Links/links";

class OtherEreas extends Component {
  state = {
    ereas: [
      {
        link: "Community portal ",
        explanation:
          " The central hub for editors, with resources links, tasks, and announcements.",
      },
      {
        link: "Village pump ",
        explanation:
          " Forum for discussions about Wikipedia itself, including policies and technical issues.",
      },
      {
        link: "Site news ",
        explanation:
          " Sources of news about Wikipedia and the broader Wikimedia movement.",
      },
      {
        link: "Teahouse ",
        explanation: " Ask basic questions about using or editing Wikipedia.",
      },
      {
        link: "Help desk ",
        explanation: " Ask questions about using or editing Wikipedia.",
      },
      {
        link: "Reference desk ",
        explanation: " Ask research questions about encyclopedic topics.",
      },
      {
        link: "Content portals ",
        explanation: " A unique way to navigate the encyclopedia.",
      },
    ],
  };
  render() {
    return (
      <>
        {this.state.ereas.map((i, index) => {
          return (
            <li className="list-group-item" key={index}>
              <b>
                <Links linkTxt={i.link} urls="/wikipedia" />
              </b>
              &ndash;
              {i.explanation}
            </li>
          );
        })}
      </>
    );
  }
}
export default OtherEreas;
