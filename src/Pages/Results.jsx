import Navbar from "../Component/Navbar/Navbar";

function Results() {
  return (
    <>
      <Navbar />
      <main style={{ padding: 40 }}>
        <h2>Election Results</h2>
        <p>Review the latest election counts and final results.</p>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 24 }}>
          <thead>
            <tr style={{ backgroundColor: "#f7f7f7" }}>
              <th style={{ textAlign: "left", padding: 12, border: "1px solid #ddd" }}>Election</th>
              <th style={{ textAlign: "left", padding: 12, border: "1px solid #ddd" }}>Winner</th>
              <th style={{ textAlign: "left", padding: 12, border: "1px solid #ddd" }}>Votes</th>
              <th style={{ textAlign: "left", padding: 12, border: "1px solid #ddd" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: 12, border: "1px solid #ddd" }}>Student Council</td>
              <td style={{ padding: 12, border: "1px solid #ddd" }}>Candidate A</td>
              <td style={{ padding: 12, border: "1px solid #ddd" }}>1,024</td>
              <td style={{ padding: 12, border: "1px solid #ddd" }}>Closed</td>
            </tr>
            <tr>
              <td style={{ padding: 12, border: "1px solid #ddd" }}>Board Chair</td>
              <td style={{ padding: 12, border: "1px solid #ddd" }}>Candidate C</td>
              <td style={{ padding: 12, border: "1px solid #ddd" }}>856</td>
              <td style={{ padding: 12, border: "1px solid #ddd" }}>Closed</td>
            </tr>
            <tr>
              <td style={{ padding: 12, border: "1px solid #ddd" }}>Safety Committee</td>
              <td style={{ padding: 12, border: "1px solid #ddd" }}>Candidate B</td>
              <td style={{ padding: 12, border: "1px solid #ddd" }}>712</td>
              <td style={{ padding: 12, border: "1px solid #ddd" }}>Closed</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}

export default Results;
