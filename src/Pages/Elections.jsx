import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import API_URL from "../api/api";

function Elections() {
  const [elections, setElections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchElections = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/elections`);
        const contentType = response.headers.get("content-type") || "";
        const data = contentType.includes("application/json") ? await response.json() : null;
        if (response.ok) {
          setElections(data || []);
        } else {
          setError(data?.error || `Failed to load elections (${response.status})`);
        }
      } catch (err) {
        setError("Network error: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchElections();
  }, []);

  if (loading) return <><Navbar /><main style={{ padding: 40 }}><p>Loading elections...</p></main></>;
  if (error) return <><Navbar /><main style={{ padding: 40 }}><p style={{ color: "red" }}>{error}</p></main></>;

  return (
    <>
      <Navbar />
      <main style={{ padding: 40 }}>
        <h2>Elections</h2>
        <p>Browse current and upcoming elections available to vote in.</p>
        <div style={{ display: "grid", gap: 20, marginTop: 24, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {elections.length > 0 ? (
            elections.map((election) => (
              <article key={election.id} style={{ border: "1px solid #ddd", borderRadius: 10, padding: 20 }}>
                <h3>{election.title}</h3>
                <p>{election.description || "No description available"}</p>
                <p><strong>Candidates:</strong> {election.candidates?.length || 0}</p>
                <p><strong>Status:</strong> Open</p>
                <Link to={`/vote?electionId=${election.id}`} style={{ color: "#0077cc" }}>Vote now</Link>
              </article>
            ))
          ) : (
            <p>No elections available at the moment.</p>
          )}
        </div>
      </main>
    </>
  );
}

export default Elections;
