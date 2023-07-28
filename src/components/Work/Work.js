import React from "react";
import "./work.css";

function Work() {
  return (
    <main className="work-main">
      <h1 className="work-h1">Our Work</h1>
      <div className="work-page">
        <div className="column">
          <a href="./WorkHistory/Jawny.js"><div id="box-1" className="event-col box-1-hover">
            <div className="box-1-hover-txt">Jawny</div>
          </div></a>
          <div id="box-3" className="event-col">
            <div className="box-3-hover">
              <div className="box-3-hover-txt">Mereba</div>
            </div>
          </div>
        </div>
        <div className="column">
          <div id="box-2" className="event-col">
            <div className="box-2-hover">
              <div className="box-2-hover-txt">King Krule</div>
            </div>
          </div>
          <div id="box-4" className="event-col">
            <div className="box-4-hover">
              <div className="box-4-hover-txt">Freddy Gibbs</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Work;
