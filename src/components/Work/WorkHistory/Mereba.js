import React, { useState, useEffect } from "react";
import "./workhistory.css";
import { loremIpsum } from "lorem-ipsum";

function Mereba() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lorem, setLorem] = useState("");

  useEffect(() => {
    setLorem(
      loremIpsum({
        count: 35,
        units: "words",
      })
    );
  }, []);

  return (
    <div className="work-history">
      <div className="mereba-img"></div>
      <div className="bio-txt">
        <h1 className="bio-h1">Mereda</h1>
        <br />
        <h3>Los Angeles, CA</h3>
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
  );
}

export default Mereba;
