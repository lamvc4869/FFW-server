import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(res.data)
      const { accessToken, user } = res.data;
      console.log(user);
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Đăng nhập thành công!");
        navigate('/home');
      }
    } catch (err) {
      if (err.response) toast.error(err.response.data.message || "Đăng nhập thất bại");
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
          Sign In
        </h1>

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

        <div className="mb-5">
          <label htmlFor="password" className="block text-sm text-gray-700 mb-1">
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

        <button
          type="submit"
          disabled={!email || !password}
          className={`w-full py-2 text-sm font-medium text-white 
            ${!email || !password ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 hover:bg-black transition"}`}
        >
          {isLoading ? "Đang đăng nhập..." : "Sign In"}
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Chưa có tài khoản?{" "}
          <a href="/register" className="text-gray-800 font-medium underline hover:text-black">
            Đăng ký
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
