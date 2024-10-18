// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import ProfileButton from "./ProfileButton";
// import OpenModalButton from "../OpenModalButton/OpenModalButton";
// import LoginFormModal from "../LoginFormModal";
// import SignupFormModal from "../SignupFormModal";
// import "./Navigation.css";

// function Navigation({ isLoaded }) {
//   const sessionUser = useSelector((state) => state.session.user);

//   let sessionLinks;
//   if (sessionUser) {
//     sessionLinks = (
//       <li>
//         <ProfileButton user={sessionUser} />
//       </li>
//     );
//   } else {
//     sessionLinks = (
//       <div>
//         <li>
//           <OpenModalButton buttonText="Log In" modalComponent={<LoginFormModal />} />
//         </li>
//         <li>
//           <OpenModalButton buttonText="Sign Up" modalComponent={<SignupFormModal />} />
//         </li>
//       </div>
//     );
//   }

//   return (
//     <ul>
//       <li>
//         <NavLink to="/">Home</NavLink>
//       </li>
//       {isLoaded && sessionLinks}
//     </ul>
//   );
// }

// export default Navigation;

// import { useSelector } from "react-redux";
// import ProfileButton from "./ProfileButton";
// import "./Navigation.css";
// import { NavLink } from "react-router-dom";

// function Navigation({ isLoaded }) {
//   const sessionUser = useSelector((state) => state.session.user);

//   return (
//     <ul>
//       <div className="nav-left">
//         <NavLink to="/">
//           <li className="createSpot">Create Spot</li>
//         </NavLink>
//       </div>
//       {isLoaded && (
//         <li>
//           <ProfileButton user={sessionUser} />
//         </li>
//       )}
//     </ul>
//   );
// }

// export default Navigation;

import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <ul>
      <div className="nav-left">
        {sessionUser && ( // Conditionally render the Create Spot button
          <NavLink to="/create-spot">
            <li className="createSpot">Create Spot</li>
          </NavLink>
        )}
      </div>
      {isLoaded && (
        <li>
          <ProfileButton user={sessionUser} />
        </li>
      )}
    </ul>
  );
}

export default Navigation;
