import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import API_URL from "../api/api";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [elections, setElections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("token");
      const userData = localStorage.getItem("user");

      if (!token || !userData) {
        navigate("/login");
        return;
      }

      setUser(JSON.parse(userData));

      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/elections`);
        const data = await response.json();
        if (response.ok) {
          setElections(data);
        } else {
          setError(data.error || "Failed to load elections");
        }
      } catch (err) {
        setError("Network error: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) return <><Navbar /><main style={{ padding: 40 }}><p>Loading...</p></main></>;

  return (
    <>
      <Navbar />
      <main style={{ padding: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <h2>Dashboard</h2>
            <p>Welcome back, {user?.name}!</p>
          </div>
          <button
            onClick={handleLogout}
            style={{
              padding: "10px 16px",
              backgroundColor: "#d32f2f",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        </div>

        <p style={{ marginBottom: 32 }}>Overview of your election activity and system performance.</p>
        <section style={{ display: "grid", gap: 16, marginBottom: 32, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          <div style={{ padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
            <h3>Open Elections</h3>
            <p style={{ fontSize: 24, fontWeight: "bold", margin: "8px 0" }}>{elections.length}</p>
            <p style={{ color: "#666" }}>active elections</p>
          </div>
          <div style={{ padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
            <h3>Your Role</h3>
            <p style={{ fontSize: 24, fontWeight: "bold", margin: "8px 0", textTransform: "capitalize" }}>{user?.role}</p>
            <p style={{ color: "#666" }}>account type</p>
          </div>
          <div style={{ padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
            <h3>Email</h3>
            <p style={{ fontSize: 14, fontWeight: "bold", margin: "8px 0", wordBreak: "break-all" }}>{user?.email}</p>
          </div>
        </section>

        {error && <p style={{ color: "red", marginBottom: 16 }}>{error}</p>}

        <section style={{ marginTop: 32 }}>
          <h3>Available Elections</h3>
          {elections.length > 0 ? (
            <div style={{ display: "grid", gap: 16, marginTop: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
              {elections.map((election) => (
                <div key={election.id} style={{ padding: 16, border: "1px solid #ddd", borderRadius: 8 }}>
                  <h4>{election.title}</h4>
                  <p style={{ color: "#666", fontSize: 14 }}>{election.description || "No description"}</p>
                  <p style={{ fontSize: 13, margin: "8px 0" }}>
                    <strong>Candidates:</strong> {election.candidates?.length || 0}
                  </p>
                  <a
                    href={`/vote?electionId=${election.id}`}
                    style={{
                      display: "inline-block",
                      marginTop: 12,
                      padding: "8px 12px",
                      backgroundColor: "#0077cc",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: 4,
                      fontSize: 13
                    }}
                  >
                    Vote Now
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ marginTop: 16, color: "#666" }}>No elections available at the moment.</p>
          )}
        </section>
      </main>
    </>
  );
}

export default Dashboard;
