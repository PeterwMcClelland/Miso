import React from "react";
import "./heropage.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faTicket, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const clock = <FontAwesomeIcon icon={faClock} />
const ticket = <FontAwesomeIcon icon={faTicket} />
const location = <FontAwesomeIcon icon={faLocationDot} />



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
              <h2 className="h2-artist">Jawny</h2>
              <ul className="show-info">
                <li>{clock} Doors: 7pm - Show 8pm</li>
                <li>{ticket} Tickets: $30</li>
                <li>{location} Location: 25 E 28th St</li>
              </ul>
              <div>
              <button className="button">Buy Tickets</button>
            </div>
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
