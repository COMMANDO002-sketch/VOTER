import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";

function Register() {
  return (
    <>
      <Navbar />
      <main style={{ padding: 40, maxWidth: 520, margin: "0 auto" }}>
        <h2>Create an Account</h2>
        <p>Register now to participate in elections and access your dashboard.</p>
        <form style={{ display: "grid", gap: 16, marginTop: 24 }}>
          <label>
            Full name
            <input type="text" placeholder="Your full name" style={{ width: "100%", padding: 10, marginTop: 8 }} />
          </label>
          <label>
            Email address
            <input type="email" placeholder="you@example.com" style={{ width: "100%", padding: 10, marginTop: 8 }} />
          </label>
          <label>
            Password
            <input type="password" placeholder="Create a password" style={{ width: "100%", padding: 10, marginTop: 8 }} />
          </label>
          <button type="submit" style={{ padding: "12px 20px", cursor: "pointer" }}>
            Register
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
