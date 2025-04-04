import React from "react";
import { Camera } from "lucide-react";

function AccountSettings() {
  return (
    <div className="h-screen flex justify-center bg-gray-100">
  
      <div className="h-screen w-[450px] bg-gray-100 flex flex-col">
       
        <h1 className="text-[18px] font-semibold px-6 py-4 bg-white">Account Settings</h1>

        <div className="px-6 py-6 bg-gray-100">
          <div className="flex gap-4 items-center">
  
            <div className="relative w-16 h-16">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
        
              <div className="absolute bottom-0 right-0 bg-purple-600 p-1.5 rounded-full border-2 border-white">
                <Camera className="w-4 h-4 text-white" />
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">Marry Doe</h2>
              <p className="text-gray-600 text-sm font-semibold">Marry@Gmail.Com</p>
            </div>
          </div>

          <p className="text-gray-800 text-sm mt-4">
            Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        <div className="border-t border-dashed border-gray-300 mx-6"></div>

        <div className="flex-1 bg-gray-100"></div>

        <div className="border-t border-dashed border-gray-300 mx-6"></div>
      </div>
    </div>
  );
}

export default AccountSettings;
