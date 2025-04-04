import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-between bg-gray-50">
      <div className="flex-grow"></div>

      <div className="p-6 bg-white w-full max-w-md mx-auto shadow-md rounded-lg">
        {/* Left-aligned text */}
        <div className="text-left">
          <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
          <p className="text-gray-500 text-lg mt-2">
            Lorem ipsum dolor sit amet, 
          </p>
          <p className="text-lg text-gray-500">
            consectetur adipiscing elit.
          </p>
        </div>

        {/* Buttons centered */}
        <div className="mt-6 space-y-3">
          <button
            onClick={() => navigate("/create-account")}
            className="w-full py-3 bg-[#6c25ff] cursor-pointer text-white font-medium rounded-md hover:bg-[#6d25fedf] transition"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/signin")}
            className="w-full py-3 bg-purple-200 cursor-pointer font-semibold rounded-md hover:bg-purple-300 transition"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
