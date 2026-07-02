import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <main style={{ padding: 40, maxWidth: 520, margin: "0 auto" }}>
        <h2>Login</h2>
        <p>Sign in to manage your elections and view your dashboard.</p>
        <form style={{ display: "grid", gap: 16, marginTop: 24 }}>
          <label>
            Email address
            <input type="email" placeholder="you@example.com" style={{ width: "100%", padding: 10, marginTop: 8 }} />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter your password" style={{ width: "100%", padding: 10, marginTop: 8 }} />
          </label>
          <button type="submit" style={{ padding: "12px 20px", cursor: "pointer" }}>
            Login
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
