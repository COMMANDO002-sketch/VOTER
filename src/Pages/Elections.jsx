import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";

function Elections() {
  return (
    <>
      <Navbar />
      <main style={{ padding: 40 }}>
        <h2>Elections</h2>
        <p>Browse current and upcoming elections available to vote in.</p>
        <div style={{ display: "grid", gap: 20, marginTop: 24, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <article style={{ border: "1px solid #ddd", borderRadius: 10, padding: 20 }}>
            <h3>Student Council</h3>
            <p>Vote for student leaders and board members.</p>
            <p><strong>Status:</strong> Open until July 12</p>
            <Link to="/vote" style={{ color: "#0077cc" }}>Vote now</Link>
          </article>
          <article style={{ border: "1px solid #ddd", borderRadius: 10, padding: 20 }}>
            <h3>Board Chair</h3>
            <p>Choose the next chair for the election committee.</p>
            <p><strong>Status:</strong> Open until July 16</p>
            <Link to="/vote" style={{ color: "#0077cc" }}>Vote now</Link>
          </article>
          <article style={{ border: "1px solid #ddd", borderRadius: 10, padding: 20 }}>
            <h3>Results Roundup</h3>
            <p>See final tallies for completed elections.</p>
            <p><strong>Status:</strong> Closed</p>
            <Link to="/results" style={{ color: "#0077cc" }}>View results</Link>
          </article>
        </div>
      </main>
    </>
  );
}

export default Elections;
