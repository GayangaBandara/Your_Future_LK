import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Consulting from "./pages/Consulting";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import ProfileSettings from "./pages/ProfileSettings";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;