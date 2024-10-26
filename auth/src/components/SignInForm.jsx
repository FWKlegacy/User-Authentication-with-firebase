import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignInForm.css";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account Created");
    } catch (err) {
      console.log("user,not created", err);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
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
          autoComplete="password"
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
