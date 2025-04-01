// name login
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
// git check
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Reset error before new login attempt

    try {
      // Fake API request to validate user (Replace with real API)
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();

      const user = users.find((u) => u.email === email);

      if (user) {
        const userData = { name: user.name, email: user.email, token: "123456789" };
        console.log("Login Successful:", userData);

        dispatch(login(userData)); // Save user in Redux
        navigate("/"); // Redirect to Home after login
      } else {
        setError("Invalid email or password. Try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-3">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </form>
      <h2>Try this email for login: <strong>Sincere@april.biz</strong></h2>
    </div>
  );
};

export default Login;
