"use client";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import React, { useState } from "react";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [promotionsAccepted, setPromotionsAccepted] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    contact: "",
    termsAccepted: "",
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = { ...errors };

    if (!email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
      valid = false;
    } else {
      newErrors.email = "";
    }

    if (!password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (password.length < 8 || password.length > 12) {
      newErrors.password = "Password must be 8-12 characters long.";
      valid = false;
    } else {
      newErrors.password = "";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
      valid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    } else {
      newErrors.confirmPassword = "";
    }

    if (!termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions.";
      valid = false;
    } else {
      newErrors.termsAccepted = "";
    }

    setErrors(newErrors);
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
    <div>
        <Header/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg my-10">
            <h2 className="text-3xl font-bold text-blue-700 text-center mb-10 border border-b-black border-x-0 border-t-0 p-6">JOIN US</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <h1 className="text-lg font-semibold text-black">Email (ID)*</h1>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@ex.com *"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
                <h1 className="text-lg font-semibold text-black">Password*</h1>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password (8-12 characters) *"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <div className="mb-4">
                <h1 className="text-lg font-semibold text-black">Confirm Password*</h1>
                <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password *"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>
            <div className="mb-4">
                <h1 className="text-lg font-semibold text-black">Address</h1>
                <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                />
            </div>
            <div className="mb-4">
                <h1 className="text-lg font-semibold text-black">Contact Number*</h1>
                <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Contact Number"
                className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <p className="border border-gray-800 mt-10 mb-4"></p>
            <div className="mb-4">
                <label className="flex items-center">
                <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="mr-2"
                />
                <span>I agree to the terms and conditions (Required)</span>
                </label>
                {errors.termsAccepted && <p className="text-red-500 text-sm mt-1">{errors.termsAccepted}</p>}
            </div>
            <div className="mb-4">
                <label className="flex items-center">
                <input
                    type="checkbox"
                    checked={promotionsAccepted}
                    onChange={(e) => setPromotionsAccepted(e.target.checked)}
                    className="mr-2"
                />
                <span>I agree to receive promotions and emails (Optional)</span>
                </label>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded font-bold h-14 mt-4"
            >
                Register
            </button>
            </form>
        </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Register;
