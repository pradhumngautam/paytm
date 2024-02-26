import React from "react";
import Navbar from "../components/Navbar";
import { redirect, useNavigate } from "react-router-dom";
import LinearIndeterminate from "../components/Loading";
import Slider from "../components/Slider";

const Home = () => {
  const navigate = useNavigate();
  const navigateTosignup = () => {
    // 👇️ navigate to /contacts
    navigate("/signup");
  };
  const navigateTosignin = () => {
    // 👇️ navigate to /contacts
    navigate("/signin");
  };
  return (
    <div>
      <LinearIndeterminate/>
      <Navbar />
      <Slider/>
    </div>
  );
};

export default Home;
