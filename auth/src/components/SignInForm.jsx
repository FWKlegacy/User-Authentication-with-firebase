import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignInForm.css";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account Created");
      setEmail("");
      setPassword("");
    } catch (error) {
      // Handle Firebase signup errors by code
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("This email is already in use.");
          break;
        case "auth/weak-password":
          setError("Password should be at least 6 characters.");
          break;
        case "auth/invalid-email":
          setError("Invalid email format.");
          break;
        default:
          setError("Signup failed. Please try again.");
      }
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
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
      <button type="submit">sign Up</button>
      <p>
        Already signed up? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}

export default SignInForm;
