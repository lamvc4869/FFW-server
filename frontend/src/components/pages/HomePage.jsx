import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      toast.error("Không tìm thấy token, vui lòng đăng nhập lại.");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/v1/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        toast.success("Đăng xuất thành công!");
        setTimeout(() => navigate("/login"), 800);
      } else {
        toast.error(data.message || "Access Token đã hết hạn.");
      }
    } catch (error) {
      toast.error(error.message || "Đã xảy ra lỗi khi đăng xuất.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        className="
          px-8 py-3 font-semibold text-white rounded-2xl
          bg-gradient-to-r from-gray-400 to-gray-500
          transition-all duration-300 ease-out
          hover:scale-105 hover:from-red-400 hover:to-pink-500
          shadow-md hover:shadow-lg
          active:scale-90
        "
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
