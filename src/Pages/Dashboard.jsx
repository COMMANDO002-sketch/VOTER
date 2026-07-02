import Navbar from "../Component/Navbar/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />
      <main style={{ padding: 40 }}>
        <h2>Dashboard</h2>
        <p>Overview of your election activity and system performance.</p>
        <section style={{ display: "grid", gap: 16, marginTop: 24, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          <div style={{ padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
            <h3>Open Elections</h3>
            <p>3 active elections</p>
          </div>
          <div style={{ padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
            <h3>Registered Voters</h3>
            <p>1,280 voters</p>
          </div>
          <div style={{ padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
            <h3>Pending Ballots</h3>
            <p>45 ballots waiting</p>
          </div>
        </section>
        <section style={{ marginTop: 32 }}>
          <h3>Latest activity</h3>
          <ul style={{ listStyle: "none", padding: 0, marginTop: 16 }}>
            <li style={{ padding: 16, border: "1px solid #eee", borderRadius: 8, marginBottom: 12 }}>
              Election “Board Chair” opened for voting.
            </li>
            <li style={{ padding: 16, border: "1px solid #eee", borderRadius: 8, marginBottom: 12 }}>
              New candidate added for “Student Council”.
            </li>
            <li style={{ padding: 16, border: "1px solid #eee", borderRadius: 8 }}>
              Results published for last week’s election.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
