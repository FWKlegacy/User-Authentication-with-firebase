import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SignInForm.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      setEmail("");
      setPassword("");
    } catch (error) {
      // Firebase returns errors by code; use these to provide helpful feedback
      switch (error.code) {
        case "auth/user-not-found":
          setError("No user found with this email.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password. Please try again.");
          break;
        case "auth/invalid-email":
          setError("Invalid email format.");
          break;
        default:
          setError("Login failed. Invalid Credentials.");
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
      return () => unsubscribe();
    });
  }, [navigate]);

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>LogIn</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <label htmlFor="email">
        Email :
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Valid Email"
          autoComplete="email"
          required
        />
      </label>
      <label htmlFor="password">
        Password :
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          autoComplete="new-password"
          required
        />
      </label>
      <button type="submit">Login</button>
      <p>
        Not Registered yet? <Link to="/signin">Sign Up Here</Link>
      </p>
    </form>
  );
}

export default SignInForm;
