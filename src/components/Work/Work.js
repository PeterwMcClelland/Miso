import React from "react";
import "./work.css";
import { Link } from "react-router-dom";

function Work() {
  return (
    <main className="work-main">
      <h1 className="work-h1">Our Work</h1>
      <div className="work-page">
        <div className="column">
          <Link to="/jawny">
            <div id="box-1" className="event-col box-1-hover">
              <div className="box-1-hover-txt">Jawny</div>
            </div>
          </Link>
          <Link to="/mereba">
            <div id="box-3" className="event-col">
              <div className="box-3-hover">
                <div className="box-3-hover-txt">Mereba</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="column">
          <Link to="/kingkrule">
            <div id="box-2" className="event-col">
              <div className="box-2-hover">
                <div className="box-2-hover-txt">King Krule</div>
              </div>
            </div>
          </Link>
          <Link to="/freddiegibbs">
          <div id="box-4" className="event-col">
            <div className="box-4-hover">
              <div className="box-4-hover-txt">Freddy Gibbs</div>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Work;
