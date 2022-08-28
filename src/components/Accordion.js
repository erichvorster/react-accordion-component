import React, { useState, useRef } from "react";
import "./Accordion.css";
import Chevron from "./Chevron";

const Accordion = (props) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [activeIcon, setActiveIcon] = useState("");
  // const [rotate, setRotate] = useState("accordion__icon");
  console.log(activeIcon);

  const content = useRef(null);

  function toggleAccordion() {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    //Chevron Rotate
    // setRotate(
    //   active === "active" ? "accordion__icon" : "accordion__icon rotate"
    // );
    setActiveIcon(active === "active" ? "" : "active__icon");
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${active}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        {/* Chevron Button */}
        {/* <Chevron className={`${rotate}`} width={10} fill={"#777"} /> */}
        <div className="plus__minus">
          <div className={`line__1${activeIcon} `}></div>
          <div className={`line__2${activeIcon} `}></div>
        </div>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
};

export default Accordion;
