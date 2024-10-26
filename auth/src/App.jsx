import React from "react";
import LogInForm from "./components/LogInForm";
import SignInForm from "./components/SignInForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/login" element={<LogInForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
