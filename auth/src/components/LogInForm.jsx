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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      setEmail("");
      setPassword("");
      console.log("Login successful");
    } catch (err) {
      console.log("Login unsuccessful", err);
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
