import React from "react";
import { redirect, useNavigate } from "react-router-dom";

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
      
    </div>
  );
};

export default Home;
