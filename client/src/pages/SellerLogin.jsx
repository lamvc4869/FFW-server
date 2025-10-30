import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const SellerLogin = () => {
  const { isSeller, setIsSeller, navigate, axios } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      if (data.success && data.user.role === "admin") {
        toast.success(data.message);
        localStorage.setItem("accessToken", data.accessToken);
        setIsSeller(true);
        navigate("/seller");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    // event.preventDefault();
    // setIsSeller(true)
  };

  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller]);

  return (
    !isSeller && (
      <form
        onSubmit={onSubmitHandler}
        className="min-h-screen flex items-center text-sm text-gray-600"
      >
        <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200">
          <p className="text-2xl font-medium m-auto">
            <span className="text-primary">Seller</span> Login
          </p>
          <div className="w-full ">
            <p className="mb-2">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full px-3 py-2 border border-gray-500/40 rounded outline-none"
              type="email"
              placeholder="enter you email"
              required
            />
          </div>
          <div className="w-full ">
            <p className="mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full px-3 py-2 border border-gray-500/40 rounded outline-none"
              type="password"
              placeholder="enter your password"
              required
            />
          </div>
          <button
            className="w-full mt-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-2.5 rounded font-medium"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    )
  );
};

export default SellerLogin;
