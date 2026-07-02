import Navbar from "../Component/Navbar/Navbar";

function Vote() {
  return (
    <>
      <Navbar />
      <main style={{ padding: 40 }}>
        <h2>Vote</h2>
        <p>Select a candidate and cast your ballot securely.</p>
        <section style={{ marginTop: 24, maxWidth: 760 }}>
          <div style={{ padding: 20, border: "1px solid #ddd", borderRadius: 10, marginBottom: 16 }}>
            <h3>Candidate A</h3>
            <p>Experienced leader with a strong plan for transparency.</p>
            <button style={{ padding: "10px 16px", cursor: "pointer" }}>Vote for Candidate A</button>
          </div>
          <div style={{ padding: 20, border: "1px solid #ddd", borderRadius: 10, marginBottom: 16 }}>
            <h3>Candidate B</h3>
            <p>Fresh ideas focused on community engagement and reforms.</p>
            <button style={{ padding: "10px 16px", cursor: "pointer" }}>Vote for Candidate B</button>
          </div>
          <div style={{ padding: 20, border: "1px solid #ddd", borderRadius: 10 }}>
            <h3>Candidate C</h3>
            <p>Committed to secure and accessible voting for every participant.</p>
            <button style={{ padding: "10px 16px", cursor: "pointer" }}>Vote for Candidate C</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Vote;
