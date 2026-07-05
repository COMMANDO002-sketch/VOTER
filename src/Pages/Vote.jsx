import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import API_URL from "../api/api";

function Vote() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const electionId = searchParams.get("electionId");
  const [election, setElection] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const loadElection = async () => {
      if (!electionId) {
        setError("No election selected");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/elections/${electionId}`);
        const data = await response.json();
        if (response.ok) {
          setElection(data);
        } else {
          setError(data.error || "Failed to load election");
        }
      } catch (err) {
        setError("Network error: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    loadElection();
  }, [electionId]);

  const handleVote = async () => {
    if (!selectedCandidate) {
      setError("Please select a candidate");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please login to vote");
      navigate("/login");
      return;
    }

    try {
      setSubmitting(true);
      setError("");
      const response = await fetch(`${API_URL}/api/elections/${electionId}/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ candidateId: selectedCandidate }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Your vote has been recorded successfully!");
        setTimeout(() => navigate("/elections"), 2000);
      } else {
        setError(data.error || "Failed to record vote");
      }
    } catch (err) {
      setError("Network error: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <><Navbar /><main style={{ padding: 40 }}><p>Loading election...</p></main></>;
  if (error && !election) return <><Navbar /><main style={{ padding: 40 }}><p style={{ color: "red" }}>{error}</p></main></>;

  return (
    <>
      <Navbar />
      <main style={{ padding: 40 }}>
        <h2>Vote - {election?.title}</h2>
        <p>{election?.description}</p>
        
        {error && <div style={{ color: "red", marginBottom: 16 }}>{error}</div>}
        {success && <div style={{ color: "green", marginBottom: 16 }}>{success}</div>}
        
        <section style={{ marginTop: 24, maxWidth: 760 }}>
          {election?.candidates && election.candidates.length > 0 ? (
            <>
              {election.candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  onClick={() => setSelectedCandidate(candidate.id)}
                  style={{
                    padding: 20,
                    border: selectedCandidate === candidate.id ? "2px solid #0077cc" : "1px solid #ddd",
                    borderRadius: 10,
                    marginBottom: 16,
                    cursor: "pointer",
                    backgroundColor: selectedCandidate === candidate.id ? "#e8f4fd" : "white",
                    transition: "all 0.2s"
                  }}
                >
                  <h3>{candidate.name}</h3>
                  <p>{candidate.bio || "No bio available"}</p>
                  {candidate.imageUrl && (
                    <img src={candidate.imageUrl} alt={candidate.name} style={{ width: 100, height: 100, borderRadius: 8 }} />
                  )}
                  <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
                    {selectedCandidate === candidate.id ? "✓ Selected" : "Click to select"}
                  </p>
                </div>
              ))}
              <button
                onClick={handleVote}
                disabled={!selectedCandidate || submitting}
                style={{
                  padding: "12px 20px",
                  cursor: submitting || !selectedCandidate ? "not-allowed" : "pointer",
                  opacity: submitting || !selectedCandidate ? 0.6 : 1,
                  marginTop: 16,
                  backgroundColor: "#0077cc",
                  color: "white",
                  border: "none",
                  borderRadius: 6
                }}
              >
                {submitting ? "Recording vote..." : "Submit Vote"}
              </button>
            </>
          ) : (
            <p>No candidates available for this election.</p>
          )}
        </section>
      </main>
    </>
  );
}

export default Vote;
