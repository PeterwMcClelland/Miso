import React from "react";
import "./heropage.scss";

function HeroPage() {
  return (
    <div>
      <body className="hero-page"></body>
      <div>
        <h1>Coming Soon</h1>
        <div className="three-columns">
          {/* column 1 */}
          <div className="column">
            <div className="artist-card">
              <div className="img-jawny"></div>
              <p>Location: 2910 e 6th</p>
            </div>
            <div className="artist-card">
              <div className="img-mereba"></div>
              <p>Location: 2910 e 6th</p>
            </div>
          </div>
          {/* column 2 */}
          <div className="column">
            <div className="artist-card">
              <div className="img-freddie"></div>
              <p>Location: 342 S 40st</p>
            </div>
            <div className="artist-card">
              <div className="img-king"></div>
              <p>Location:</p>
            </div>
          </div>
          {/* column 3 */}
          <div className="column">column 3</div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
