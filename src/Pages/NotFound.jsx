import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";

function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{ padding: 40, textAlign: "center" }}>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" style={{ color: "#0077cc" }}>
          Return to Home
        </Link>
      </main>
    </>
  );
}

export default NotFound;
