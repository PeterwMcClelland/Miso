import React, { useState, useEffect } from "react";
import "./workhistory.css";
import { loremIpsum } from "lorem-ipsum";
import ScrollTrigger from "react-scroll-trigger";

function FreddieGibbs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lorem, setLorem] = useState("");
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setLorem(
      loremIpsum({
        count: 35,
        units: "words",
      })
    );
  }, []);

  const onEnterViewport = () => {
    setAnimation(true);
  };

  return (
    <ScrollTrigger onEnter={onEnterViewport}>
      <div
        className={`work-history ${
          animation ? "slideInFromLeft-work-history" : ""
        }`}
      >
        <div className="freddie-img"></div>
        <div className="bio-txt">
          <h1 className="bio-h1">Freddie Gibbs</h1>
          <br />
          <h3>Austin, TX</h3>
          <br />
          <p>{lorem}</p>
          <br />
          <p>{lorem}</p>
          <br />
          <h3>Scope</h3>
          <ul className="scope">
            <li>-Social Media</li>
            <li>-Local Media Partnerships</li>
            <li>-Ticket Promotion</li>
            <li>-Show Coordination</li>
          </ul>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default FreddieGibbs;
