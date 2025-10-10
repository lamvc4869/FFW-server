import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import SignUp from "./components/ui/SignUp";
import SignIn from "./components/ui/SignIn";
import ProtectedRoute from "./components/common/ProtectedRoute";
import { Toaster } from "sonner";

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
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
