import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignInForm.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("login successful");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log("Login unsuccessful", err);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>LogIn</h2>
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
