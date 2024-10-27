import React from "react";
import LogInForm from "./components/logInForm";
import SignInForm from "./components/signInForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/login" element={<LogInForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
