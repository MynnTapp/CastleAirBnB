import { FaModx } from "react-icons/fa6";

import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./profileButton.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  const handleMenuClick = (e) => {
    e.stopPropagation(); // This prevents the dropdown from closing
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <div className="profile-container">
      <button onClick={toggleMenu}>
        <FaModx />
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <div onClick={handleMenuClick}>
            <li>Hello {user.firstName}</li>
            <li> {user.username}</li>
            <li>
              {user.firstName} {user.lastName}
            </li>
            <li>{user.email}</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </div>
        ) : (
          <>
            <li>
              <OpenModalButton buttonText="Log In" modalComponent={<LoginFormModal />} />
            </li>
            <li>
              <OpenModalButton buttonText="Sign Up" modalComponent={<SignupFormModal />} />
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default ProfileButton;
