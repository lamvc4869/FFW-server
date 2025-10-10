import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import SignUp from "./components/pages/SignUp.jsx";
import SignIn from "./components/pages/SignIn.jsx";
import ProtectedRoute from "./components/common/ProtectedRoute";
import { Toaster } from "sonner";
import IntroducePage from "@/components/pages/IntroducePage.jsx";

function App() {
  return (
    <>
      <Toaster richColors />
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path='/' element={<IntroducePage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
