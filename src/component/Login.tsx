"use client";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    let valid = true;

    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid. Submitting...");
      // Submit form logic here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">Welcome!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email (ID)"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-bold"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500">Log in with your SNS account</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-green-500"><i className="fab fa-naver text-3xl"></i></a>
            <a href="#" className="text-yellow-500"><i className="fab fa-kakaotalk text-3xl"></i></a>
            <a href="#" className="text-blue-500"><i className="fab fa-facebook text-3xl"></i></a>
            <a href="#" className="text-red-500"><i className="fab fa-google text-3xl"></i></a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700">Don't have an account? <a href="#" className="text-blue-600 font-bold">Sign Up</a></p>
          <div className="mt-4 flex justify-center space-x-8 text-blue-600 text-sm">
            <a href="#">Find Email(ID)</a>
            <a href="#">Find Password</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
