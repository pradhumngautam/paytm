import React from "react";
import { Button } from "../components/Button";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
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
    <main className="bg-black h-screen items-center">
      {/* <div>home page background color </div> */}
      <div className="flex">
        <div className="w-2/5 text-indigo-500 ">
          <div className="flex items-center justify-center ml-5">
            <img
              src="logo.png"
              alt="logo"
              className="w-25 h-20 object-contain ml-10 mt-20"
            />
            <h1 className="text-yellow-500 items-center flex-grow justify-center font-bold text-4xl ml-3 mt-20">
              {" "}
              Swift Spend
            </h1>
          </div>
          <h2 className="text-white text-3xl mt-20 ml-10 mr-10">
            Seamless Transfers, Swift Solutions: Your Money, Your Way!
          </h2>
          <div className="flex flex-col justify-center space-x-5 ">
            <div className="rounded-lg  w-80 text-center p-2 h-max px-4 ml-24 mt-10">
              <div className="text-white font-bold mb-5 mt-10 text-3xl">
                Get started
              </div>
              <div className="flex items-center justify-center ml-3">
                <button
                  onClick={navigateTosignup}
                  type="button"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2"
                >
                  sign up{" "}
                </button>

                <button
                  onClick={navigateTosignin}
                  type="button"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2"
                >
                  sign in{" "}
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-3/5 h-full">
          <img src="landing.jpg" className=" h-screen " height={800} />
        </div>
      </div>
    </main>
  );
};

export default Home;
