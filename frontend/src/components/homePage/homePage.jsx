import logo from "./images/princess_castle_airbnb_logo.png";
import "./homePage.css";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <NavLink to="/">
        <img src={logo} alt="princess AirBnB" />
      </NavLink>
    </div>
  );
}
