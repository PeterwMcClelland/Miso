import React, { useRef } from "react";
import "./heropage.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faTicket,
  faLocationDot,
  faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";

const clock = <FontAwesomeIcon icon={faClock} />;
const ticket = <FontAwesomeIcon icon={faTicket} />;
const location = <FontAwesomeIcon icon={faLocationDot} />;
const downArrow = <FontAwesomeIcon icon={faArrowDownLong} />;




function HeroPage() {

  const showRef = useRef(null);

  const scrollToShows = () => {
    if (showRef.current) {
      showRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="shows-background">
      <body className="hero-page">
        <div className="show-btn-container">
          <div className="shows-button" onClick={scrollToShows}>Upcoming Shows</div>
          <div className="down-arrow">{downArrow}</div>
        </div>
      </body>
      <div ref={showRef} className="show-page">
      <h1 >Coming Soon</h1>
        <div className="three-columns">
          {/* column 1 */}
          <div className="column">
            <div className="artist-card">
              <div className="img-jawny"></div>
              <h2 className="h2-artist">Jawny</h2>
              <div id="show-info">
                <ul className="show-info">
                  <li>{clock} Doors: 7pm - Show 8pm</li>
                  <li>{ticket} Tickets: $30</li>
                  <li>{location} Location: 25 E 28th St</li>
                </ul>
                <div className="button-field">
                  <div id="button-blue" className="button">
                    Buy Tickets
                  </div>
                  <Link to="/jawny">
                    <div className="button">Learn More</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="artist-card">
              <div className="img-mereba"></div>
              <h2 className="h2-artist">Mereba</h2>
              <div id="show-info">
                <ul className="show-info">
                  <li>{clock} Doors: 7pm - Show 8pm</li>
                  <li>{ticket} Tickets: $30</li>
                  <li>{location} Location: 25 E 28th St</li>
                </ul>
                <div className="button-field">
                  <div id="button-blue" className="button">
                    Buy Tickets
                  </div>
                  <Link to="/mereba">
                    <div className="button">Learn More</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* column 2 */}
          <div className="column">
            <div className="artist-card">
              <div className="img-freddie"></div>
              <h2 className="h2-artist">Freddie Gibbs</h2>
              <div id="show-info">
                <ul className="show-info">
                  <li>{clock} Doors: 7pm - Show 8pm</li>
                  <li>{ticket} Tickets: $30</li>
                  <li>{location} Location: 25 E 28th St</li>
                </ul>
                <div className="button-field">
                  <div id="button-blue" className="button">
                    Buy Tickets
                  </div>
                  <Link to="/freddiegibbs">
                    <div className="button">Learn More</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="artist-card">
              <div className="img-king"></div>
              <h2 className="h2-artist">King Krule</h2>
              <div id="show-info">
                <ul className="show-info">
                  <li>{clock} Doors: 7pm - Show 8pm</li>
                  <li>{ticket} Tickets: $30</li>
                  <li>{location} Location: 25 E 28th St</li>
                </ul>
                <div className="button-field">
                  <div id="button-blue" className="button">
                    Buy Tickets
                  </div>
                  <Link to="/kingkrule">
                    <div className="button">Learn More</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* column 3 */}
          <div id="announc-h1" className="column">Announcements</div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
