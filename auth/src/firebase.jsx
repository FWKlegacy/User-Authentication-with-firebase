import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhIHHjE_q-2JsT4Z97gnPxa6EZs-H23aE",
  authDomain: "authentication-9f57f.firebaseapp.com",
  projectId: "authentication-9f57f",
  storageBucket: "authentication-9f57f.appspot.com",
  messagingSenderId: "735953144703",
  appId: "1:735953144703:web:5cd880378bf7683c1fa84a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
