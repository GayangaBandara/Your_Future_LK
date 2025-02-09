import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { auth } from "../services/firebase";
import "../styles/Navbar.css";

const Navbar = () => {
  const { user } = useUser();

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>YourFutureLK</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/consulting">Consulting</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        {user ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        ) : (
          <li><Link to="/signin">Sign In</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;