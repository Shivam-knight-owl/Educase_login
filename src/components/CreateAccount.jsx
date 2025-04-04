import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: false,
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/settings");
  };

  const formFields = [
    { label: "Full Name", name: "fullName", required: true },
    { label: "Phone number", name: "phone", type: "tel", required: true },
    { label: "Email address", name: "email", type: "email", required: true },
    { label: "Password", name: "password", type: "password", required: true },
    { label: "Company name", name: "company" },
  ];

  return (
    <div className="h-screen flex justify-center bg-gray-100">
      <div className="h-screen w-[450px] bg-white px-8 pt-10 shadow-lg flex flex-col">
        <h1 className="text-3xl font-bold text-gray-900">Create your</h1>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">PopX account</h1>

        <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full pb-8">
          <div className="space-y-5">
            {formFields.map(({ label, name, type = "text", required }) => (
              <div key={name} className="relative">
                <input
                  type={type}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange(name)}
                  required={required}
                  className="peer w-full px-3 py-[10px] border border-gray-300 rounded-md focus:border-purple-600 focus:ring-2 focus:ring-purple-600 outline-none text-[15px]"
                  placeholder=" " 
                />
                <label
                  htmlFor={name}
                  className="absolute left-3 text-[14px] text-purple-600 bg-white px-1 transition-all 
                    -top-3 peer-placeholder-shown:top-[10px] peer-placeholder-shown:text-gray-400 
                    peer-placeholder-shown:text-[14px] peer-focus:-top-2 peer-focus:text-purple-600 peer-focus:text-[12px]"
                >
                  {label} {required && <span className="text-red-500">*</span>}
                </label>
              </div>
            ))}

            <div>
              <label className="block text-[15px] font-semibold text-purple-600 mb-2">
                Are you an Agency? <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-6">
                {["Yes", "No"].map((option, index) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer text-[14px]">
                    <input
                      type="radio"
                      name="isAgency"
                      checked={formData.isAgency === (index === 0)}
                      onChange={() => setFormData({ ...formData, isAgency: index === 0 })}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-600"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-[10px] bg-[#6c25ff] cursor-pointer text-white font-medium rounded-md hover:bg-[#6d25fedf] transition text-[15px] mt-6"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
