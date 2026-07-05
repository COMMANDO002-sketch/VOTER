import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import axios from "../api/axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("/api/auth/register", { name, email, password });
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
      const msg = err?.response?.data?.error || err.message || "Registration failed";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main style={{ padding: 40, maxWidth: 520, margin: "0 auto" }}>
        <h2>Create an Account</h2>
        <p>Register now to participate in elections and access your dashboard.</p>
        {error && <div style={{ color: "red", marginBottom: 16 }}>{error}</div>}
        <form style={{ display: "grid", gap: 16, marginTop: 24 }} onSubmit={handleRegister}>
          <label>
            Full name
            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: "100%", padding: 10, marginTop: 8, boxSizing: "border-box" }}
            />
          </label>
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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: 10, marginTop: 8, boxSizing: "border-box" }}
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            style={{ padding: "12px 20px", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.6 : 1 }}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p style={{ marginTop: 20 }}>
          Already have an account? <Link to="/login">Login</Link>.
        </p>
      </main>
    </>
  );
}

export default Register;
