import React, { useState, useEffect } from "react";
import "./workhistory.css";
import { loremIpsum } from "lorem-ipsum";

function KingKrule() {
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
      <div className="king-img"></div>
      <div className="bio-txt">
        <h1 className="bio-h1">King Krule</h1>
        <br />
        <h3>Portland, OR</h3>
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

export default KingKrule;
