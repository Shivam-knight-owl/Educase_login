import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Signin from "./components/Signin";
import CreateAccount from "./components/CreateAccount";
import AccountSettings from "./components/AccountSettings";

function App() {
  return (
    <Router>
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/settings" element={<AccountSettings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
