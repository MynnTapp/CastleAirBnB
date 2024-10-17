import logo from "./images/princess_castle_airbnb_logo.png";
import "./homePage.css";
import { NavLink } from "react-router-dom";
import castle1 from "./CastleImages/800_3642382_crbbsgag7woq5l6ffzcekzmp3v6pn2mduy3m0s6z.jpg";
import castle2 from "./CastleImages/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vMGU3ZjAzNzgtODBkYS00YjNmLWIxYjMtYzY3N2QyZDM4MTY1LmpwZWc.webp";
import castle3 from "./CastleImages/castle_in_the_sky_by_misconceptionaiart_dfxz8nm-pre.jpg";
import castle4 from "./CastleImages/Inside_and_Seek_(20).png";

export default function HomePage() {
  return (
    <div>
      <NavLink to="/">
        <img src={logo} alt="princess AirBnB" />
      </NavLink>
      <div className="castle-gallery">
        <div className="castle-item">
          <img src={castle1} alt="Castle 1" title="pretty pink Skycastle" />
          <div className="castle-caption">5/5</div>
          <p>Savannah, Georgia</p>
          <p>$123.54 night</p>
        </div>
        <div className="castle-item">
          <img src={castle2} alt="Castle 2" title="sparkly mexican castle" />
          <div className="castle-caption">1/5</div>
          <p>$900.67 night</p>
          <p>Santa Fe, New Mexico</p>
        </div>
        <div className="castle-item">
          <img src={castle3} alt="Castle 3" title="Castle in the woods" />
          <div className="castle-caption">4/5</div>
          <p>$679.93 night</p>
          <p>Aspen, Colorado</p>
        </div>
        <div className="castle-item">
          <img src={castle4} alt="Castle 4" title="hide and seek castle" />
          <p>$320.56 night</p>
          <p>Newport, Rhode Island</p>
          <div className="castle-caption">4/5</div>
        </div>
      </div>
    </div>
  );
}
