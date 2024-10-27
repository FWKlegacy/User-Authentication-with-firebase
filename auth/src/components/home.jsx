import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

function Home() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/login");
  };
  return (
    <div>
      <h2>Home is where we are loved genuinely</h2>
      <button style={{ width: "500px" }} onClick={handleSignOut}>
        logout
      </button>
    </div>
  );
}

export default Home;
