import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import axios from "../api/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("/api/auth/login", { email, password });
      const data = res.data;

      // Store token and user data
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      const msg = err?.response?.data?.error || err.message || "Login failed";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main style={{ padding: 40, maxWidth: 520, margin: "0 auto" }}>
        <h2>Login</h2>
        <p>Sign in to manage your elections and view your dashboard.</p>
        {error && <div style={{ color: "red", marginBottom: 16 }}>{error}</div>}
        <form style={{ display: "grid", gap: 16, marginTop: 24 }} onSubmit={handleLogin}>
          <label>
            Email address
            <input 
              type="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: 10, marginTop: 8, boxSizing: "border-box" }} 
            />
          </label>
          <label>
            Password
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: 10, marginTop: 8, boxSizing: "border-box" }} 
            />
          </label>
          <button type="submit" disabled={loading} style={{ padding: "12px 20px", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.6 : 1 }}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p style={{ marginTop: 20 }}>
          New here? <Link to="/register">Create an account</Link>.
        </p>
      </main>
    </>
  );
}

export default Login;
