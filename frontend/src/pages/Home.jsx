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
    <div className="h-screen  w-full ">
      <nav className="grid grid-cols-6 h-16 w-full bg-blue-950 ">
        <div className="grid-cols-2">
          {" "}
          <img
            src="logo.png"
            alt="logo"
            className="w-25 h-16 object-contain ml-10 "
          />
        </div>
        <div className="grid-cols-4">
          <h1 className="text-yellow-500 items-center flex-grow justify-center font-bold text-4xl mt-2 ">
            {" "}
            SWIFT SPEND
          </h1>
        </div>
      </nav>
      <div className="w-full h-72 bg-blue-900 ">
        <div className="flex justify-center space-x-5 ">
          <div className="rounded-lg  w-80 text-center p-2 h-max px-4 ml-24 mt-10">
            <div className="text-white font-bold mb-5 mt-10 text-3xl">
              Get started
            </div>
            <div className="flex items-center justify-center">
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
      </div>
      <main className="grid  grid-cols-6 w-full h-96 ">
        <div className="bg-blue-600 col-span-2 h-96">
          <img
            src="https://pbs.twimg.com/media/ErHfPosXUAIvuKq.jpg"
            alt="logo"
            className="w-full h-96 hover:"
          />
        </div>
        <div className="bg-yellow-100 col-span-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/012/217/659/non_2x/internet-banking-with-smartphone-online-transaction-3d-illustration-with-copy-space-gold-coin-money-transfer-illustration-banner-technology-background-vector.jpg"
            alt="logo"
            className="w-full h-96"
          />
        </div>
      </main>
      <footer className=" grid grid-cols-2 w-full bg-black h-20">
        <div className="grid-cols-1">
          <p class="text-white mt-1">@2022copyright</p>
        </div>

        <div class="flex gap-x-2 grid-cols-1">
          <p class="text-white text-2xl italic">
            Followus on our socialhandles:
          </p>
          <br />

          <a
            className="text-white hover:text-blue-500 mt-1"
            target="_blank"
            href="https://twitter.com/ipradhumngautam"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-twitter "
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a
            className="mt-1"
            target="_blank"
            href="https://www.instagram.com/gautam_pradhumn/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-instagram "
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </a>
          <a
            className="mt-1"
            target="_blank"
            href="https://www.youtube.com/pradhumngautam"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-youtube "
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
              <path d="m10 15 5-3-5-3z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
