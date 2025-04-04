import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/settings");
  };

  return (
    <div className="h-screen flex justify-center bg-gray-100">
      <div className="h-screen w-[450px] bg-white px-8 pt-10 shadow-lg flex flex-col">
        <h1 className="text-3xl font-bold text-gray-900">Signin to your</h1>
        <h1 className="text-3xl font-bold text-gray-900">PopX account</h1>
        <p className="text-gray-500 text-lg mt-2">Lorem ipsum dolor sit amet,</p>
        <p className="text-gray-500 text-lg mb-6">consectetur adipiscing elit.</p>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="space-y-5">
            {[
              { label: "Email address", name: "email", type: "email" },
              { label: "Password", name: "password", type: "password" },
            ].map(({ label, name, type }) => (
              <div key={name} className="relative">
                <input
                  type={type}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange(name)}
                  required
                  placeholder=" "
                  className="peer w-full px-3 py-[10px] border border-gray-300 rounded-md focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none text-[15px] bg-transparent"
                />
                <label
                  htmlFor={name}
                  className={`absolute left-3 text-[14px] text-purple-600 bg-white px-1 transition-all 
                    -top-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-gray-400 
                    peer-placeholder-shown:text-[15px] peer-focus:-top-2 peer-focus:text-purple-600 peer-focus:text-[12px]`}
                >
                  {label}
                </label>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-[10px] bg-gray-400 cursor-pointer text-white font-medium rounded-md hover:bg-gray-500 transition text-[15px] mt-8"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
