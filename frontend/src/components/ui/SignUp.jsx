import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      toast.error("Vui lòng đồng ý với điều khoản Privacy & Policy.");
      return;
    }

    setIsLoading(true);
    try {
      await axios.post(
        "http://localhost:3000/api/v1/register",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success("Tạo tài khoản thành công!");
      setTimeout(() => navigate("/login"), 800);
    } catch (err) {
      if (err.response)
        toast.error(err.response.data.message || "Đăng ký thất bại!");
      else toast.error("Không thể kết nối đến server");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-300 w-full max-w-sm p-6"
      >
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Sign Up
        </h1>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            disabled={isLoading}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-600"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            disabled={isLoading}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-600"
            required
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center mb-5">
          <input
            id="agree"
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="h-4 w-4 text-gray-700 border-gray-300 focus:ring-0"
          />
          <label htmlFor="agree" className="ml-2 text-sm text-gray-600">
            I agree to the{" "}
            <a
              href="#"
              className="font-medium text-gray-800 underline hover:text-black"
            >
              Privacy & Policy
            </a>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!email || !password || !agreed}
          className={`w-full py-2 text-sm font-medium text-white 
            ${
              !email || !password || !agreed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gray-800 hover:bg-black transition"
            }`}
        >
          {isLoading ? "Đang tạo tài khoản..." : "Sign Up"}
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Đã có tài khoản?{" "}
          <a
            href="/login"
            className="text-gray-800 font-medium underline hover:text-black"
          >
            Đăng nhập
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
